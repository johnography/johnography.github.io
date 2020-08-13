import React from 'react';
import JohnIcon from '../images/john.jpg';

export default function AboutMe() {
  return (
    <>
      <h3>About Me</h3>
      <div className="container smaller neushadow">
        <p>I live in the Pacific Northwest with my wife, son, and two dogs. We love to go hiking and swimming.</p>
        <p>I enjoy coding, design, playing music, and videography.</p>
        {/* <p>
        Please visit my Youtube Channel,{' '}
        <a href="https://www.youtube.com/channel/UCAFYLGn9SpW81Y-qUkb5wUg" target="_blank">
        PNW Tech
        </a>
        , to see more examples of my work and tutorials!
      </p> */}
        <img className="neushadow" src={JohnIcon} />
      </div>
    </>
  );
}
