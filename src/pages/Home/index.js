import Buscador from '../../components/Buscador';
import Lista from '../../components/Lista';


export default function Home () {
  return (
    <>
      <section>
        <Buscador />
      </section>
      <section className>
        <Lista />
      </section>
    </>
  )
}