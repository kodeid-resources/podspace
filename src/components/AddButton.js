import React from 'react';
import './AddButton.css';

const AddButton = ({ formVisibility, showForm }) => (
  <button type="button" className="float" onClick={showForm}>
    <span>
      {formVisibility === false ? '+' : 'x'}
    </span>
  </button>
);

export default AddButton;
