import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import resultTrue from './__mocks__/data';
import itemTrue from './__mocks__/pokemon';
import { getPokemon, getPokemones } from '../../services/Pokemon';

describe("Request pokemon", () => {
    let mockAxios;

    beforeAll(() => {
        mockAxios = new MockAdapter(axios);
    });

    it("Should return the list of pokemones", async () => {
        mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12`).reply(200, resultTrue);
        const result = await getPokemones({});
        expect(result).toEqual(resultTrue);
    });

    it("Should return pokemon", async () => {
        mockAxios.onGet(`https://pokeapi.co/api/v2/pokemon/pikachu`).reply(200, itemTrue);
        const item = await getPokemon('pikachu');
        expect(item.data).toEqual(itemTrue);
    });
});
