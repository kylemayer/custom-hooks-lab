import React from 'react';
import CharacterList from './CharacterList';
import { render } from '@testing-library/react';

describe('Character list component', () => {
  it('displays a list of hey arnold characters', async () => {
    render(<CharacterList />);
  });
});
