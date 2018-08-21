import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.js';

const Menu = () => (
  <div className={styles.box}>
    <ul>
      <li>
        <Link to="/">
Home
        </Link>
      </li>

      <li>
        <Link to="/add">
Add New Podcast
        </Link>
      </li>
      <li>
        <Link to="/about">
About
        </Link>
      </li>
      <li>
        <Link to="/subscribe">
Subscribe
        </Link>
      </li>
      <li>
        <Link to="/contact">
Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
