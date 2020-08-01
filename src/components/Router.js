import React from 'react';

export default function Router({ menuItems, menuSelection }) {
  return menuItems && menuSelection != null && menuItems[menuSelection].component;
}
