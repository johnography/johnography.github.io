import React from 'react';
import Menu from './Menu';

export default function LeftSidebar({ menuItems, menuSelection, setMenuSelection }) {
  return (
    <>
      <Menu menuItems={menuItems} menuSelection={menuSelection} setMenuSelection={setMenuSelection} />
    </>
  );
}
