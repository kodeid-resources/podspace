/* global: document */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import App from './App.js';
import About from './About.js';
import Subscribe from './Subscribe.js';
import NoMatch from './NoMatch.js';

const RootApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/contact" component={() => <Redirect to="/about" />} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
