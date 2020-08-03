import React, { useState } from 'react';
import './Contact.css';
import JohnIcon from '../images/john.jpg';

function Reveal() {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)}>
      <p className="pointer">
        John Sullivan
        <br />
        {show ? 'johnography@outlook.com' : 'Click to reveal'}
        <br />
        {show ? '415-879-2257' : 'contact information.'}
      </p>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="contact-card neushadow">
      <img className="neushadow" src={JohnIcon} />
      <Reveal />
    </div>
  );
}
