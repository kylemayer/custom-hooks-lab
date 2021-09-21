import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/displays/CharacterDetail';
import { Link } from 'react-router-dom';
import { fetchCharaById } from '../services/heyArnoldApi';

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchCharaById()
      .then((character) => setCharacter(character))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h4>Loading...</h4>;

  return (
    <>
      <Link to="/">
        <h3>Go Back</h3>
      </Link>
      <CharacterDetail character={character} />
    </>
  );
};

export default Detail;
