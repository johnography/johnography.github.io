import React, { useState } from 'react';
import './FortuneTeller.css';

const fortunes = [
  'Be brave when facing the competition.',
  'An exciting opportunity lies ahead of you.',
  'A routine task will turn into an exchanting adventure.',
  'Be true to your work, your word, and your friends.',
  'You will receive money from an unexpected source.',
  'Plan for many pleasures ahead.',
];

export default function FortuneTeller() {
  const [fortune, setFortune] = useState('Your fortune will appear here...');
  function getFortune() {
    setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
  }
  return (
    <>
      <div className="Fortune-Teller neushadow">
        <div className="FT-Header neushadow">
          <div className="FT-Title">Fortunes, Forcasts, Lucky Charms</div>
          <div className="FT-SubTitle">Catch the dope of your horoscope!</div>
        </div>
        <div className="FT-Main">
          <div className="FT-Panel">{fortune}</div>
          <div className="FT-Button" onClick={() => getFortune()}>
            Push me!
          </div>
        </div>
        <div className="FT-Footer">Please come again!</div>
      </div>
    </>
  );
}
