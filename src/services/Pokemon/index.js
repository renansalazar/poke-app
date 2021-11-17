import axios from "axios";

export const getPokemones = async ({ pageParam = 0 }) => {
  const cant = 12
  const response = await axios(`https://pokeapi.co/api/v2/pokemon/?offset=${pageParam*cant}&limit=${cant}`);
  const results = response.data.results;
  const count = response.data.count
  const totalPages = count/cant
  return { results, count, nextPage: pageParam + 1, totalPages };
}

export const getPokemon = async (name='pikachu') => axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
