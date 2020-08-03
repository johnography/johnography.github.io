import React from 'react';
import Sidemenu from './SideMenu';
import { menuItems } from '../App';

export default { title: 'Sidemenu' };

export const sideMenu = () => <Sidemenu menuItems={menuItems} />;
