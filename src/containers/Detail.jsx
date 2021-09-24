import React from 'react';
import CharacterDetail from '../components/displays/CharacterDetail';
import { Link } from 'react-router-dom';
import { useCharacterById } from '../hooks/useCharacterById';

const Detail = () => {
  const { loading, character } = useCharacterById();

  if (loading) return <h4>Loading...</h4>;

  return (
    <>
      <Link to="/">
        <h3>Go Back</h3>
      </Link>
      <CharacterDetail name={character.name} image={character.image} />
    </>
  );
};

export default Detail;
