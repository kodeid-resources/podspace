import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.js';

const Podcast = ({ podcast }) => (
  <div className={styles.podcast}>
    <img alt={podcast.title} src={podcast.thumbnail} />
    <h2>{podcast.title}</h2>
    <a className={styles.button}>Listen</a>
  </div>
);

Podcast.propTypes = {
  podcast: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default Podcast;
