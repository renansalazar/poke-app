import { useQuery, useInfiniteQuery } from 'react-query'
import { getPokemon, getPokemones } from "../services/Pokemon";


export function usePokemon (keyName='heyItem', name='pikachu') {
  return useQuery(keyName, ()=>getPokemon(name), {cacheTime: 1e7})
}


export function usePokemones (keyName='hey') {
  return useInfiniteQuery(keyName, getPokemones, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  })
}