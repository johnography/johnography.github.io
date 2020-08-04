import React from 'react';
import LeftSidebar from './LeftSidebar';
import Menu from './Menu';
import { menuItems } from '../App';

export default { title: 'Left Sidebar' };

export const leftSidebar = () => <LeftSidebar menuItems={menuItems} />;

export const menu = () => <Menu menuItems={menuItems} menuSelection={0} setMenuSelection={() => {}} />;
