import { TechnologyItem } from './components/TechnologyItem';
import { technologies } from './data';
import './technologies.css'

export const Technologies = () => {

  

  return (
    <section id="tecnologias" className="w-full mt-[-8em]">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row overflow-hidden rounded-lg bg-white shadow-md justify-center items-center lg:items-start">
        {
          technologies.map( (item, index )=> (
            <TechnologyItem 
            key={ index }
            { ...item }
            index={ index } />
          ))
        }
      </div>
    </section>
  )
}
