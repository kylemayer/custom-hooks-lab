import { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/heyArnoldApi';

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCharacters()
      .then((res) => {
        setCharacters(res.characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};
