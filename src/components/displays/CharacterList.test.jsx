import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('Character list component', () => {
  afterEach(() => cleanup());
  it('displays a list of hey arnold characters', async () => {
    const { asFragment } = render(
      <CharacterList characters={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
