import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import PropTypes from 'prop-types';

export const Loader = ({size}) => (
  <FadeLoader color='#cc6633' css={{display: 'block'}} size={size} />
);

Loader.propTypes = {
  size: PropTypes.number,
};
