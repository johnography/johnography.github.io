import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Html from './Html';
import JavaScript from './JavaScript';
import TypeScript from './TypeScript';
import ReactComponent from './ReactComponents';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/html">
        <Html />
      </Route>
      <Route path="/javascript">
        <JavaScript />
      </Route>
      <Route path="/typescript">
        <TypeScript />
      </Route>
      <Route path="/react">
        <ReactComponent />
      </Route>
    </Switch>
  );
}
