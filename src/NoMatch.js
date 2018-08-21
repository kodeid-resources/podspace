import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.js';
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import SearchBox from './components/SearchBox.js';

const NoMatch = () => (
  <div className={styles.wrapper}>
    <Header />
    <Menu />
    <SearchBox />
    <h2>
      404 Not Found.
      <div>
        <Link to="/">
Back to Home
        </Link>
      </div>
    </h2>
  </div>
);

export default NoMatch;
