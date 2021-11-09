import React from 'react';
import {render, screen} from '@testing-library/react';
import Buscador from './';

describe('search component', () => {
  test('text in search', () => {
    const pokemon = 'pikachu'

    render(
      <Buscador name={pokemon} />
    )

    const el = screen.getByTestId("buscadorText")
    expect(el.value).toEqual(pokemon)
  });
});