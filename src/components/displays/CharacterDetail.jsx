import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image }) => (
  <div role="character-detail">
    <figure>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </div>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CharacterDetail;
