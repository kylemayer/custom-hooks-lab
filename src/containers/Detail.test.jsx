/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import character from '../json/character.json';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters/:id',
    (req, res, ctx) => {
      return res(ctx.json(character));
    }
  )
);

describe('HeyArnold detail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays Nancy character', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/5da237699734fdcb7bef8f5c']} keyLength={25}>
        <Detail />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    await screen.findByText('Nancy', { exact: false });
    expect(container).toMatchSnapshot();
  });
});
