import PropTypes from 'prop-types';
import React from 'react';

export function Weight({ weight }) {
  return (
    <div className="product-single-sku text-textSubdued">
      <span>Weight</span>
      <span>: </span>
      {weight.text}
    </div>
  );
}

Weight.propTypes = {
  weight: {
    text: PropTypes.string.isRequired,
    value: PropTypes.number,
    unit: PropTypes.string
  }
};
