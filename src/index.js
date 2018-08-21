import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import App from './App.js';
import About from './About.js';
import Subscribe from './Subscribe.js';

// import registerServiceWorker from './registerServiceWorker';

const RootApp = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/subscribe" component={Subscribe} />
      <Route path="/contact" component={() => <Redirect to="/about" />} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
// registerServiceWorker();
