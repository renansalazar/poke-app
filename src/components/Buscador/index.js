import { useState } from "react";

const Buscador = ({name=''}) => {
  const [namePokemon, setNamePokemon] = useState(name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(namePokemon.trim()!==''){
      window.location.href = "/detalle/" + namePokemon.toLowerCase().trim().replace(" ", "-")
    }
  }

  return (<form onSubmit={handleSubmit} className='containerBuscador'>
    <input 
      data-testid="buscadorText" 
      type="search"
      value={namePokemon} 
      placeholder="Inserte Nombre de Pokemon"
      onChange={(e)=>setNamePokemon(e.target.value)}
    />
    <button>Buscar</button>
  </form>)
}

export default Buscador