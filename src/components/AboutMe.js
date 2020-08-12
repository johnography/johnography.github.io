import React from 'react';
import Contact from './Contact';

export default function AboutMe() {
  return (
    <>
      <h3>About Me</h3>
      <Contact />
      <p>I live in the Pacific Northwest with my wife, son, and two dogs. We love to go hiking and swimming.</p>
      <p>I enjoy coding, design, and videography.</p>
      <p>
        Please visit my Youtube Channel,{' '}
        <a href="https://www.youtube.com/channel/UCAFYLGn9SpW81Y-qUkb5wUg" target="_blank">
          PNW Tech
        </a>
        , to see more examples of my work and tutorials!
      </p>
    </>
  );
}
