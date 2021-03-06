export const fetchCharacters = async () => {
  const res = await fetch(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters'
  );
  const characters = await res.json();

  return characters.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.image,
  }));
};

export const fetchCharaById = async (id) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  const character = await res.json();

  return character;
};
