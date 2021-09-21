import React from 'react';
import Character from './Character';
import { render } from '@testing-library/react';

describe('Character component', () => {
  it('displays the details for one character', async () => {
    render(<Character />);
  });
});
