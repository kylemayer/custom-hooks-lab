/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnold from './HeyArnold';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import list from '../json/list.json';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json(list));
    }
  )
);

describe('HeyArnold Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of hey arnold characters', async () => {
    const { container } = render(
      <MemoryRouter>
        <HeyArnold />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).not.toBeEmptyDOMElement();
    expect(container).toMatchSnapshot();
  });
});
