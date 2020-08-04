import React from 'react';
import Contact from './Contact';
import AboutMe from './AboutMe';

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <Contact />
      <AboutMe />
    </div>
  );
}
