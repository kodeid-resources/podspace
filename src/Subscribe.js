import React from 'react';

import Header from './components/Header.js';
import Menu from './components/Menu.js';
import styles from './styles.js';

const Subscribe = () => (
  <div className={styles.wrapper}>
    <Header />
    <Menu />
    <div className={styles.box}>
      <h2>
Subscribe
      </h2>
      <p>
        Silakan subscribe untuk mendapatkan informasi terkini dari PodSpace.
        <br />
        <br />
        <button
          className={styles.button}
          type="button"
          onClick={() => alert("You're subscribed!")}
        >
          Subscribe now!
        </button>
      </p>
    </div>
  </div>
);

export default Subscribe;
