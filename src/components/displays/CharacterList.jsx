import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';
import styles from './CharacterList.css';

const CharacterList = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => (
      <li className={styles.list} key={character.id}>
        <Link to={`/${character.id}`}>
          <Character {...character} />
        </Link>
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default CharacterList;
