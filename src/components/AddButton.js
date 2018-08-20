import React from 'react';

import styles from '../styles.js';

const AddButton = ({ formVisibility, showForm }) => (
  <button type="button" className={styles.float} onClick={showForm}>
    <span>
      {formVisibility === false ? '+' : 'x'}
    </span>
  </button>
);

export default AddButton;
