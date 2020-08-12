import React from 'react';
import Technology from './Technology';
import SoftUi from './SoftUi';

export default function Home() {
  return (
    <>
      <h2>Site As An Example</h2>
      <p>
        This site was created as way to showcase my work as a software engineer. Most of my professional experience has
        been for corporate intranets, which are not accessible by the public.
      </p>
      <p>
        This Single Page Application written in HTML5, CSS3, and JavaScript uses a custom configuration of React, Babel,
        & Webpack.
      </p>
      <SoftUi />
      <Technology />
      <p>Please take a look around and enjoy!</p>
      <p>
        Sincerely,
        <br />
        John Sullivan
      </p>
    </>
  );
}
