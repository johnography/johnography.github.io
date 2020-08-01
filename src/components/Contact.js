import React, { useState } from 'react';
import './Contact.css';
import JohnIcon from './images/john.jpg';

function Reveal() {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)}>
      <p>John Sullivan</p>
      <p>johnography@outlook.com</p>
      <p>{show ? '415-879-2257' : 'Click to reveal phone number.'}</p>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="contact-card">
      <img src={JohnIcon} />
      <Reveal />
    </div>
  );
}
