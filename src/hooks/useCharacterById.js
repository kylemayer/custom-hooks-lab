import { useEffect, useState } from 'react';
import { fetchCharaById } from '../services/heyArnoldApi';

export const useCharacters = (id) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCharaById(id)
      .then((res) => {
        setCharacters(res.characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};
