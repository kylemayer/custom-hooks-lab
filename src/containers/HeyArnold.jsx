import React, { useState, useEffect } from 'react';
import CharacterList from '../components/displays/CharacterList';
import { fetchCharacters } from '../services/heyArnoldApi';

const HeyArnold = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then((characters) => setCharacters(characters))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h4>Loading...</h4>;

  return <CharacterList characters={characters} />;
};

export default HeyArnold;
