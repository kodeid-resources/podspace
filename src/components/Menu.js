import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.js';

const Menu = () => (
  <div className={styles.box}>
    <ul className={styles.menus}>
      <li className={styles.menu}>
        <Link to="/">
Home
        </Link>
      </li>
      <li className={styles.menu}>
        <Link to="/about">
About
        </Link>
      </li>
      <li className={styles.menu}>
        <Link to="/subscribe">
Subscribe
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
