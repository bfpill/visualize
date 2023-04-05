import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="#77DD77">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

Checkmark.propTypes = {
  size: PropTypes.number.isRequired,
};

const CheckmarkInCorner = ({ size }) => (
  <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
    <Checkmark size={size / 4} />
  </div>
);

CheckmarkInCorner.propTypes = {
  size: PropTypes.number.isRequired,
};

export default CheckmarkInCorner;
