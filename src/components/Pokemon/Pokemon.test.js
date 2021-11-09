import React from 'react';
import {render, screen} from '@testing-library/react';
import Pokemon from './';

describe('pokemen item component', () => {
  test('show item pokemon', () => {
    const pokemon = {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/"
    }

    render(<Pokemon data={pokemon} />)

    const el = screen.getByTestId("itemPokemonName")
    expect(el.textContent).toEqual(pokemon.name)
  });
});