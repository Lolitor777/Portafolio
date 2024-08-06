import astronauta from '../../../assets/landing/astronauta.webp';
import taza from '../../../assets/landing/taza.png';
import libro from '../../../assets/landing/libro.png';
import './inicio.css'

export const Presentation = () => {
  return (
    <section
      id="inicio"
      className="mt-[4em] w-full relative">

      <div className="w-[90%] max-w-7xl mx-auto text-center">
        <h2 className="font-titillium text-[1.8rem] font-bold sm:text-[2.3rem] lg:text-[3.5rem]">Creo sitios web desde cero</h2>

        <p className="font-semibold mt-5 sm:text-[1.3rem] lg:text-[1.6rem]">Me gustan muchas cosas, pero desarrollar aplicaciones web me resulta gratificante.</p>

        <div className='flex justify-center items-end max-w-[400px] mx-auto'>

          <figure className='w-[60px]'>
            <img
              src={libro}
              alt="Foto de astronauta"
              className='object-cover object-center w-full' />
          </figure>

          <figure className='w-[70%] max-w-[350px] mt-10 lg:mt-[4em] mx-auto astronauta-image'>
            <img
              src={astronauta}
              alt="Foto de astronauta"
              className='object-cover object-center w-full' />
          </figure>

          <figure className='w-[60px]'>
            <img
              src={taza}
              alt="Foto de astronauta"
              className='object-cover object-center w-full' />
          </figure>

        </div>

      </div>

    </section>
  )
}
