import React from 'react';

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
      <h3>Some Technologies Of Which I Am Familiar</h3>
      <div className="tech-icon-grid neushadow">
        <div className="tech-icon">
          {/* <Tooltip title="HTML5, XML, YAML & Markdown" placement="top"> */}
          <i className="fab fa-html5 fa-5x" />
          {/* </Tooltip> */}
        </div>
        <div className="tech-icon">
          {/* <Tooltip title="CSS3" placement="top"> */}
          <i className="fab fa-css3-alt fa-5x" />
          {/* </Tooltip> */}
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
          <i className="fab fa-aws fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-docker fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-dropbox fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-git-alt fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-node-js fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-npm fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-python fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-raspberry-pi fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-apple fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-microsoft fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-linux fa-5x"></i>
        </div>
        <div className="tech-icon">
          <i className="fab fa-ubuntu fa-5x"></i>
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
