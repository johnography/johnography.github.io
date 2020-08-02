import React from 'react';
import './FortuneTeller.css';

export default function FortuneTeller() {
  return (
    <>
      <div className="Fortune-Teller neushadow">
        <div className="FT-Header">
          <div className="FT-Title">Fortunes, Forcasts, Lucky Charms</div>
          <div className="FT-SubTitle">'Catch the dope of your horoscope!'</div>
        </div>
        <div className="FT-Main">
          <div className="FT-Panel">Panel</div>
          <div className="FT-Button">Button</div>
        </div>
        <div className="FT-Footer">Footer</div>
      </div>
    </>
  );
}
