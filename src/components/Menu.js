import React from 'react';
import './Menu.css';

export default function Menu({ menuItems, menuSelection, setMenuSelection }) {
  return (
    menuItems && (
      <div className="menu">
        <ul>
          {menuItems.map((item, i) => {
            return (
              <li className="neushadow" key={i} onClick={() => setMenuSelection(i)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
