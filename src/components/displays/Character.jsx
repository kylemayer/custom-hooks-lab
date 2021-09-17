import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => (
  <div>
    <img src={image} alt={name} />
    <p></p>
  </div>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Character;
