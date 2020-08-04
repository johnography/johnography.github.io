import React from 'react';
import Main from './Main';
import Home from './Home';
import FortuneTeller from './FortuneTeller';
import DataVis from './DataVis';

export default { title: 'Main' };

export const main = () => <Main />;

export const home = () => <Home />;

export const fortuneTeller = () => <FortuneTeller />;

export const dataVis = () => <DataVis />;
