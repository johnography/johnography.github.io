import React from 'react';
import { Link } from 'react-router-dom';

import './SideMenu.css';

export default function SideMenu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/html">HTML5, CSS3, & Web Standards</Link>
        </li>
        <li>
          <Link to="/javascript">JavaScript</Link>
        </li>
        <li>
          <Link to="/typescript">TypeScript</Link>
        </li>
        <li>
          <Link to="/react">ReactJS & Web Components</Link>
        </li>
        <li>
          <Link to="/eslint">ESLint & Code Readability</Link>
        </li>
        <li>
          <Link to="/babel">Babel</Link>
        </li>
        <li>
          <Link to="/webpack">Webpack</Link>
        </li>
        <li>
          <Link to="/jest">Jest & Testing</Link>
        </li>
        <li>
          <Link to="/node">Node.JS & Express</Link>
        </li>
        <li>
          <Link to="/asp">ASP.NET & C#</Link>
        </li>
        <li>
          <Link to="/cmd">Bash & Command Line</Link>
        </li>
        <li>
          <Link to="/git">GIT</Link>
        </li>
        <li>
          <Link to="/cloud">Cloud</Link>
        </li>
        <li>
          <Link to="/design">UI/UX Design</Link>
        </li>
        <li>
          <Link to="/videography">Videography</Link>
        </li>
      </ul>
    </div>
  );
}
