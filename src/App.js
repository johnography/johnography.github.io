import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './css/johnography.css';
import './css/responsive.css';
import './css/grid.css';
import './css/neumorphism.css';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Router from './components/Router';
import Main from './components/Main';
import Html from './components/Html';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { hot } from 'react-hot-loader';
import JavaScript from './components/JavaScript';
import TypeScript from './components/TypeScript';
import ReactComponents from './components/ReactComponents';
import DataVis from './components/DataVis';
import BabelTranspile from './components/BabelTranspile';
import Eslint from './components/Eslint';
import Webpack from './components/Webpack';
import JestTest from './components/JestTest';
import FortuneTeller from './components/FortuneTeller';

function App(props) {
  const [menuSelection, setMenuSelection] = useState(null);

  const menuItems = [
    {
      name: 'Home',
      link: '/',
      color: 'rgba(140,70,70,0.25)',
      component: <Main />,
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

  useEffect(() => {
    setMenuSelection(0);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="leftmenu">
          <SideMenu menuItems={menuItems} menuSelection={menuSelection} setMenuSelection={setMenuSelection} />
        </div>
        <div className="main">
          <Router menuItems={menuItems} menuSelection={menuSelection} />
        </div>
        <div className="rightmenu">
          <Contact />
          <AboutMe />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {};

export default hot(module)(App);
