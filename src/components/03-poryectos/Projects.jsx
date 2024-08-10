import { Link } from 'react-router-dom';
import { ProjectItem } from './components/ProjectItem';
import { projects } from './data';

export const Projects = () => {


  return (
    <section
      id='proyectos'
      className='mt-[4em] lg:mt-[7em] '>
      <div className='w-[90%] max-w-7xl mx-auto text-center'>
        
        <h2 className='font-titillium text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-bold'>Mis proyectos</h2>
        
        <p className='mt-[1.5em] font-semibold md:text-[1.2rem]'>
          A continuación verás algunos proyectos que he realizado. ¿te interesaría colaborar conmigo?
          <Link to='contact' className='text-blue active:text-[#3498dbc3] lg:hover:text-[#3498dbc3]'> Envíame un mensaje.</Link>
        </p>

        <div className='mt-[2em] lg:mt-[5em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 place-items-center gap-4'>
          {
            projects.map( ( project, index ) => (
              <ProjectItem 
              key={ index } 
              { ...project }
              index={ index } />
            ))
          }
        </div>

      </div>
    </section>
  )
}
