import React from 'react';

export default function SoftUi() {
  return (
    <>
      <h2>Soft UI Design</h2>
      <div className="container neushadow">
        <p>
          This site uses a custom Soft UI that I designed after becoming familiar with the box-shadow design principles.
          I designed this style to mimic a cool light (bluish) being projected on the surface of the page. With the idea
          that the elements are extruded from the background, naturally this would cause the eye to perceive an orange
          shadow.
        </p>
        <h3>Example Header</h3>
        <div className="container neushadow">
          <p>Some text would go here...</p>
        </div>
        <p>
          You can see this technique used today in everything from blockbuster movies to independent vlogs. Using this
          combination creates an glowing effect when used with a darker background.
        </p>
      </div>
    </>
  );
}
