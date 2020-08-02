import React from 'react';
import '../css/flexbox.css';

export default function Main() {
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
      <h3>Some Technologies With Which I Am Familiar</h3>
      <div className="tech-icon-grid">
        <div className="tech-icon">
          <i className="fab fa-html5 fa-5x" />
        </div>
        <div className="tech-icon">
          <i className="fab fa-css3-alt fa-5x" />
        </div>
        <div className="tech-icon">
          <i className="fab fa-js-square fa-5x" />
        </div>
        <div className="tech-icon">
          <i className="fab fa-react fa-5x" />
        </div>
        <div className="tech-icon">
          <i className="fab fa-less fa-5x" />
        </div>
        <div className="tech-icon">
          <i className="fab fa-sass fa-5x" />
        </div>
        <div className="tech-icon">
          <i className="fab fa-sketch fa-5x" />
        </div>
        <div className="tech-icon">
          <i class="fab fa-aws fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-docker fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-dropbox fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-git-alt fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-node-js fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-npm fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-python fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-raspberry-pi fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-apple fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-microsoft fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-linux fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i class="fab fa-ubuntu fa-5x"></i>
        </div>
      </div>
      <p>Please take a look around and enjoy!</p>
      <p>
        Sincerely,
        <br />
        John Sullivan
      </p>
    </>
  );
}
