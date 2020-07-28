import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Router from './components/Router';
import AboutMe from './components/AboutMe';
import AboutSite from './components/AboutSite';
import { hot } from 'react-hot-loader';

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <div className="row">
          <div className="col-12">
            <div className="header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 col-xs-12">
            <SideMenu />
          </div>
          <div className="col-6 col-xs-12">
            <Router />
          </div>
          <div className="col-3 col-xs-12">
            <AboutMe />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <AboutSite />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {};

export default hot(module)(App);
