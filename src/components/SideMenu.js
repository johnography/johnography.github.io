import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

export default function SideMenu({ menuItems, menuSelection, setMenuSelection }) {
  return (
    menuItems && (
      <div className="menu">
        <ul>
          {menuItems.map((item, i) => {
            return (
              <li key={i} style={{ backgroundColor: item.color }} onClick={() => setMenuSelection(i)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
