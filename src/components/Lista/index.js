import { usePokemones } from '../../hooks/usePokemon'
import Pokemon from '../Pokemon'
import { Link } from "react-router-dom";

const Lista = () => {

  const { isLoading, error, data, fetchNextPage } = usePokemones('pokemones')
  if(isLoading){
    return <div id="loading">Loading...</div>
  }

  if(error){
    return <div>Error Error...</div>
  }

  const handleLoadMore = () => {
    fetchNextPage()
  }

  return <div className='containerLista' data-testid='listaContent'>
    <div className='containerLista__content'>
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
    <div className='containerLista__wrapperButton'>
      <button className='containerLista__wrapperButton__button' onClick={handleLoadMore}>Cargar más...</button>
    </div>
  </div>
}

export default Lista