import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.js';

const AddButton = ({ formVisibility, showForm }) => (
  <button type="button" className={styles.float} onClick={showForm}>
    <span>{formVisibility === false ? '+' : 'x'}</span>
  </button>
);

AddButton.propTypes = {
  formVisibility: PropTypes.bool,
  showForm: PropTypes.func.isRequired,
};

AddButton.defaultProps = {
  formVisibility: false,
};

export default AddButton;
