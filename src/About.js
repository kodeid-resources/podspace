import React from 'react';

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import styles from './styles.js';

const About = () => (
  <div className={styles.wrapper}>
    <Header />
    <Menu />
    <div className={styles.box}>
      <h2>
About
      </h2>
    </div>
  </div>
);

export default About;
