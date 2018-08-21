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
      <p>
        PodSpace adalah sebuah portal yang berisi direktori podcast keren
        berbahasa Indonesia. Buat teman-teman yang memiliki podcast dan belum
        terdaftar di PodSpace, silakan daftarkan segera. Gratis kok
        {' '}
        <span role="img" aria-label="emoji">
          😃
        </span>
        .
      </p>
      <hr />
      <span role="img" aria-label="emoji">
        🚀🚀🚀
      </span>
    </div>
  </div>
);

export default About;
