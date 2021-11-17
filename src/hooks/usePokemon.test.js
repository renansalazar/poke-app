import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { getPokemon, getPokemones } from '../services/Pokemon'
import pokemon from '../services/Pokemon/__mocks__/pokemon'
import pokemones from '../services/Pokemon/__mocks__/data'

import { usePokemon, usePokemones } from './usePokemon'

jest.mock('../services/Pokemon/__mocks__/pokemon')

describe('with each update', () => {
  let queryClient
  let wrapper
  beforeAll(() => {
    queryClient = new QueryClient()
    wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  });
  it('returns one pokemon', async () => {
    getPokemon.mockImplementation = () => Promise.resolve(pokemon)
    

    const { result, waitForNextUpdate } = renderHook(() => usePokemon(), {wrapper})
    await waitForNextUpdate()
    expect(result.current.data.data.name).toContain('pikachu')
  })

  it('returns list of pokemones', async () => {
    getPokemones.mockImplementation = () => Promise.resolve(pokemones)
    const { result, waitForNextUpdate } = renderHook(() => usePokemones(), {wrapper})
    await waitForNextUpdate()
    expect(result.current.data.pages[0].count).toEqual(1118)
  })
})