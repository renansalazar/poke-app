import {useParams} from "react-router-dom";
import Buscador from "../../components/Buscador";
import { useState } from "react";
import {usePokemon} from "../../hooks/usePokemon";
import styles from './Detalle.module.scss'

export default function Detalle () {
  const [photo, ] = useState('default')
  let { name } = useParams()
  const { isLoading, error, data } = usePokemon('repoData', name)

  return (<div>
    {
      error ? <div>No se encontro este pokemon, ¿no sera un pokemon legendario aun no descubierto? ...</div> : isLoading ? <div>Cargando ...</div> 
      : (<div className={styles.pokedex}>
          <section className={styles.first}>
            {
              photo==='default' && data.data.sprites.front_default &&
              <div className={styles.containerSprite}>
              <img src={data.data.sprites.back_default} alt="back_default" />
              <img src={data.data.sprites.front_default} alt="front_default" />
              <span className={styles.containerName}>{name}</span>
            </div>
            }
            {
              photo==='female' && data.data.sprites.front_female && <div className={styles.containerSprite}>
                <img src={data.data.sprites.back_female} alt="back_female" />
                <img src={data.data.sprites.front_female} alt="front_female" />
              </div>
            }
            {
              photo==='shiny' && data.data.sprites.front_shiny &&
              <div className={styles.containerSprite}>
                <img src={data.data.sprites.back_shiny} alt="back_shiny" />
                <img src={data.data.sprites.front_shiny} alt="front_shiny" />
              </div>
            }
            {
              photo==='shiny_female' && data.data.sprites.front_shiny_female && <div className={styles.containerSprite}>
                <img src={data.data.sprites.back_shiny_female} alt="back_shiny_female" />
                <img src={data.data.sprites.front_shiny_female} alt="front_shiny_female" />
              </div>
            }
            <div className={styles.joystick}>
              <div className={styles.button}>
              </div>
              <div className={styles.cross}>
              </div>
            </div>
              <Buscador name={name} />
          </section>
          <section className={styles.second}>
            <div className={styles.console}>
              <div className={styles.containerTypes}>
                <h6>Tipo</h6>
                {
                  data.data.types.map(d=>{
                    return <label className={styles.typeItem}>{d.type.name}</label>
                  })
                }
              </div>
              <div className={styles.stats}>
                {
                  data.data.stats.map(s=>{
                    const eleArr = []
                    for(let i = 1; i<=Number(s.base_stat); i++){
                      eleArr.push(<span className={styles.bar}></span>)
                    }
                    return (<div>
                      <small>{s.base_stat}</small>
                      {eleArr}
                      <span className={styles.statName}>{s.stat.name}</span>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className={styles.containerTriaje}>
              <div className={styles.console}>
                <h5>Altura</h5>
                {
                  Number(data.data.height)/10 + "M"
                }
              </div>
              <div className={styles.console}>
                <h5>Peso</h5>
                {
                  Number(data.data.weight)/10+ "KG"
                }
              </div>
            </div>
          </section>
        </div>)
    }
  </div>)
}
