import React from 'react';
import PropTypes from 'prop-types';

const calculateDiscount = numberOfItems => (numberOfItems / 4) * 100;

const Total = props => (
  <div>
    <h3>
      Total items:
      {props.numberOfItems}
    </h3>
    <h4>
      Discount:
      {calculateDiscount(props.numberOfItems)}%
    </h4>
  </div>
);

Total.propTypes = {
  numberOfItems: PropTypes.number,
};
Total.defaultProps = {
  numberOfItems: 0,
};
export default Total;
