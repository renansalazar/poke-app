const Pokemon = ({data}) => {
  const splitArray = data.url.split("/")
  const id = splitArray[splitArray.length-2]
      return (
      <div className='containerItem'>
        <img
          width="128px"
          height="128px"
          className="mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={data.name}
        />
        <h3 data-testid='itemPokemonName'>{data.name}</h3>
      </div>
      )
}
export default Pokemon