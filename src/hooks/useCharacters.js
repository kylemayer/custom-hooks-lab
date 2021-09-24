import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/heyArnoldApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCharacters()
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};
