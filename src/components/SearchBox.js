import React from 'react';

import styles from '../styles.js';

const SearchBox = () => (
  <div className={styles.box}>
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for podcast"
        onChange={this.handleSearchInput}
      />
      <button
        className={styles.searchButton}
        onClick={this.handleSearchButton}
        type="button"
      >
        Search
      </button>
    </form>
  </div>
);

export default SearchBox;
