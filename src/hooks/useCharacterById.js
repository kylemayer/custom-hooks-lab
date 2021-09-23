import { useEffect, useState } from 'react';
import { fetchCharaById } from '../services/heyArnoldApi';
import { useParams } from 'react-router-dom';

export const useCharacters = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCharaById(id)
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, characters };
};
