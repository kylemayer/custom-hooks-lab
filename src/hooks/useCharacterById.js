import { useEffect, useState } from 'react';
import { fetchCharaById } from '../services/heyArnoldApi';
import { useParams } from 'react-router-dom';

export const useCharacterById = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchCharaById(id)
      .then((character) => {
        setCharacter(character);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, character };
};
