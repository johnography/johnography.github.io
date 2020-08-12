import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import Main from './components/Main';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import FortuneTeller from './components/FortuneTeller';
import DataVis from './components/DataVis';
import './App.css';
import './css/johnography.css';
import './css/grid.css';
import './css/neumorphism.css';
import { hot } from 'react-hot-loader';

export const menuItems = [
  {
    name: 'Home',
    link: '/',
    color: 'rgba(140,70,70,0.25)',
    component: <Home />,
  },
  {
    name: 'Fortune Teller',
    color: 'rgba(70,140,70,0.25)',
    component: <FortuneTeller />,
  },
  {
    name: 'Data Visualizer',
    link: '/datavis',
    color: 'rgba(140,140,70,0.25)',
    component: <DataVis />,
  },
];

function App(props) {
  const [menuSelection, setMenuSelection] = useState(0);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      {/* <div className="left-sidebar">
        <LeftSidebar menuItems={menuItems} menuSelection={menuSelection} setMenuSelection={setMenuSelection} />
      </div> */}
      <div className="main">
        <Main menuItems={menuItems} menuSelection={menuSelection} />
      </div>
      <div className="right-sidebar">
        <RightSidebar />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {};

export default hot(module)(App);
