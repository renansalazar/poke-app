import { usePokemones } from '../../hooks/usePokemon'
import Pokemon from '../Pokemon'
import { Link } from "react-router-dom";

const Lista = () => {

  const { isLoading, error, data, fetchNextPage } = usePokemones('pokemones')
  if(isLoading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error Error...</div>
  }

  const handleLoadMore = () => {
    fetchNextPage()
  }

  return <div className='containerDetalle' data-testid='listaContent'>
    <div className='containerLista'>
      {
        data.pages.map(p=>{
          return p.results.map(poke=>{
            return (
              <Link to={"/detalle/" + poke.name}>
                <Pokemon data={poke} />
              </Link>
            )
          })
        })
      }
    </div>
    <div className='containerButtonLoadMore'>
      <button className='buttonLoadMore' onClick={handleLoadMore}>Cargar más...</button>
    </div>
  </div>
}

export default Lista