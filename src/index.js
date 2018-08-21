import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App.js';
import About from './About.js';

import styles from './styles.js';
// import registerServiceWorker from './registerServiceWorker';

const RootApp = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
// registerServiceWorker();
