import { Link, useNavigate } from 'react-router-dom'
import astronauta from '../../assets/landing/not-found.png'

export const NotFoundPage = () => {

  return (
    <div className='w-full h-[100vh] flex items-center justify-center flex-col'>
      
      <figure className='w-[200px] lg:w-[250px] astronauta-image'>
        <img src={ astronauta } className='w-full object-center object-cover' alt="Imagen de astronauta" />
      </figure>

      <h2 className='font-titillium font-bold text-blue text-[2rem] lg:text-[3rem]'>404 Not found</h2>

      <h2>¡Ups! creo que te extraviaste</h2>

      <Link to='/' className='bg-blue text-white px-[1em] py-[.5em] rounded-lg shadow-md mt-[1.5em] active:bg-gray active:text-white'>
        Volver al inicio
      </Link>

    </div>
  )
}
