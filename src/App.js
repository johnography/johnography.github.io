import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import '../css/johnography.css';
import '../css/responsive.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Router from './components/Router';
import Main from './components/Main';
import Html from './components/Html';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import AboutSite from './components/AboutSite';
import { hot } from 'react-hot-loader';
import JavaScript from './components/JavaScript';
import TypeScript from './components/TypeScript';
import ReactComponents from './components/ReactComponents';
import DeeThree from './components/DeeThree';
import BabelTranspile from './components/BabelTranspile';
import Eslint from './components/Eslint';
import Webpack from './components/Webpack';
import JestTest from './components/JestTest';

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
      name: 'HTML5, CSS3, & Web Standards',
      link: '/html',
      color: 'rgba(70,140,70,0.25)',
      component: <Html />,
    },
    {
      name: 'JavaScript',
      link: '/javascript',
      color: 'rgba(70,70,140,0.25)',
      component: <JavaScript />,
    },
    {
      name: 'TypeScript',
      link: '/typescript',
      color: 'rgba(70,140,140,0.25)',
      component: <TypeScript />,
    },
    {
      name: 'ReactJS & Web Components',
      link: '/react',
      color: 'rgba(140,70,140,0.25)',
      component: <ReactComponents />,
    },
    {
      name: 'D3 & Data Visualization',
      link: '/deethree',
      color: 'rgba(140,140,70,0.25)',
      component: <DeeThree />,
    },
    {
      name: 'ESLint & Code Readability',
      link: '/eslint',
      color: 'rgba(140,140,140,0.25)',
      component: <Eslint />,
    },
    {
      name: 'Babel',
      link: '/babel',
      color: 'rgba(210,140,140,0.25)',
      component: <BabelTranspile />,
    },
    {
      name: 'Webpack',
      link: '/webpack',
      color: 'rgba(140,210,140,0.25)',
      component: <Webpack />,
    },
    {
      name: 'Jest & Testing',
      link: '/jest',
      color: 'rgba(140,140,210,0.25)',
      component: <JestTest />,
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
          <AboutSite />
        </div>
      </div>
      {/* <div>
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-3 col-xs-12">
            <SideMenu menuItems={menuItems} menuSelection={menuSelection} setMenuSelection={setMenuSelection} />
          </div>
          <div className="col-6 col-xs-12">
            <Router menuItems={menuItems} menuSelection={menuSelection} />
          </div>
          <div className="col-3 col-xs-12">
            <Contact />
            <AboutMe />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AboutSite />
          </div>
        </div>
      </div> */}
    </div>
  );
}

App.propTypes = {};

export default hot(module)(App);
