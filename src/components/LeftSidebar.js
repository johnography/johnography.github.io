import React from 'react';
import Menu from './Menu';

export default function LeftSidebar({ menuItems, menuSelection, setMenuSelection }) {
  return (
    <div classMenu="left-sidebar">
      <Menu menuItems={menuItems} menuSelection={menuSelection} setMenuSelection={setMenuSelection} />
    </div>
  );
}
