import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h3>Contact</h3>
      <div onClick={() => setShow(!show)} className="container smaller neushadow">
        <p className="pointer">
          John Sullivan
          <br />
          {show ? 'johnography@outlook.com' : 'Click to reveal'}
          <br />
          {show ? '415-879-2257' : 'contact information.'}
        </p>
      </div>
    </>
  );
}
