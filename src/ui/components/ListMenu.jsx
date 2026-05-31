import coffeeCup from '../../../public/assets/coffee-cup.avif'
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { PiBooksFill } from "react-icons/pi";
import { MdSpeakerNotes, MdMarkEmailRead } from "react-icons/md";


const links = [{
    name: 'Inicio',
    link: '#inicio',
    icon: <FaHome />
},
{
    name: 'Tecnologías',
    link: '#tecnologias',
    icon: <PiBooksFill />
},
{
    name: 'Proyectos',
    link: '#proyectos',
    icon: <FaProjectDiagram />
},
{
    name: 'Testimonios',
    link: '#testimonios',
    icon: <MdSpeakerNotes />
},
{
    name: 'Contáctame',
    link: 'contact',
    icon: <MdMarkEmailRead />
}
]

export const ListMenu = ({ toggleMenu, onToggleMenu }) => {



    return (
        <div 
  className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
    toggleMenu 
      ? 'opacity-100 pointer-events-auto backdrop-blur-md bg-black/30' 
      : 'opacity-0 pointer-events-none backdrop-blur-none bg-black/0'
  }`}
  onClick={onToggleMenu}
>
  <nav 
    className={`absolute top-0 bottom-0 left-0 w-full max-w-[280px] sm:max-w-[320px] bg-neutral-900/90 backdrop-blur-xl border-r border-white/10 p-8 flex flex-col justify-between shadow-[5px_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
      toggleMenu ? 'translate-x-0' : '-translate-x-full'
    }`}
    onClick={(e) => e.stopPropagation()}
  >
    {/* Lista de Navegación Centrada Verticalmente */}
    <div className="flex flex-col items-start justify-center flex-grow pl-4">
      <ul className="w-full space-y-6 text-left">
        {links.map((link, index) => (
          <li key={index} className="relative group overflow-hidden flex border border-white justify-center items-center gap-2">
            <span className='text-white text-xl font-medium tracking-wide font-titillium py-1.5 transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-2'>
              {link.icon}
            </span>
            <a
              className="text-white text-xl font-medium tracking-wide font-titillium py-1.5 transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-2"
              onClick={onToggleMenu}
              href={link.link}
            >
              {link.name}
            </a>
            {/* Indicador izquierdo minimalista en lugar de línea inferior */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-yellow-400 rounded-full transition-all duration-300 group-hover:h-3/5 group-hover:-left-3" />
          </li>
        ))}
      </ul>
    </div>
  </nav>
</div>
    )
}
