import React from 'react';
import CharacterList from '../components/displays/CharacterList';
import { useCharacters } from '../hooks/useCharacters';

const HeyArnold = () => {
  const { loading, characters } = useCharacters();

  if (loading) return <h4>Loading...</h4>;

  return <CharacterList characters={characters} />;
};

export default HeyArnold;
