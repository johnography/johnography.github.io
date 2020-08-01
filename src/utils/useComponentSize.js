import { useState, useCallback, useLayoutEffect } from 'react';

const getSize = (el) => {
  if (!el) {
    return { width: 0, height: 0 };
  }
  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
};

function useComponentSize(ref) {
  const _useState = useState(getSize((ref && ref.current) || {}));
  const ComponentSize = _useState[0];
  const setComponentSize = _useState[1];

  const handleResize = useCallback(() => {
    if (ref.current) {
      setComponentSize(getSize(ref.current));
    }
  }, [ref, setComponentSize]);

  useLayoutEffect(
    function () {
      if (ref && !ref.current) {
        return;
      }

      const currentRef = (ref && ref.current) || {};

      handleResize();

      if (typeof ResizeObserver === 'function') {
        var resizeObserver = new ResizeObserver(function () {
          handleResize();
        });
        resizeObserver.observe(ref.current);

        return function () {
          resizeObserver.disconnect(currentRef);
          resizeObserver = null;
        };
      } else {
        window.addEventListener('resize', handleResize);

        return function () {
          window.removeEventListener('resize', handleResize);
        };
      }
    },
    [ref, handleResize],
  );

  return ComponentSize;
}

export default useComponentSize;
