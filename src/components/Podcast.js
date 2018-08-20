import React from 'react';

import styles from '../styles.js';

const Podcast = ({ podcast }) => (
  <div className={styles.podcast}>
    <img alt={podcast.title} src={podcast.thumbnail} />
    <h2>
      {podcast.title}
    </h2>
    <a className={styles.button}>
Listen
    </a>
  </div>
);

export default Podcast;
