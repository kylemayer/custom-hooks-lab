/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import HeyArnold from './HeyArnold';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json());
    }
  )
);

describe('HeyArnold Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters on the page', async () => {
    render(
      <MemoryRouter>
        <HeyArnold />
      </MemoryRouter>
    );
  });
});
