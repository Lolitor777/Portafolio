import coffeeCup from '../../assets/coffee-cup.png'

const links = [{
        name: 'Inicio',
        link: '#start'
    },   
    {
        name: 'Proyectos',
        link: '#project'
    },
    {
        name: 'Tecnologías',
        link: '#technology'
    },
    {
        name: 'Testimonios',
        link: '#testimony'
    },
    {
        name: 'Contáctame',
        link: '#contact'
    }
]

export const ListMenu = ({ toggleMenu, setToggleMenu}) => {

    const onCloseMenu = () => {
        setToggleMenu( false );
    }


  return (
    <nav className={`bg-gray md:max-w-[350px] absolute left-0 right-0 top-0 h-auto pt-5 p-10 md:right-[65%] md:bottom-0 ${ toggleMenu ? 'list-menu-container-active' : 'list-menu-container-hidden' }`}>
        <ul className="text-center">
            {
                links.map( ( link, index ) => (
                    <li 
                    key={ index } 
                    className="mt-5 md:mt-8  w-[200px] mx-auto border-b-yellow border-b-[1px] md:border-b-0">
                        <a 
                        className="text-white md:hover:text-yellow md:text-[1.5rem] font-titillium font-semibold"
                        onClick={ onCloseMenu }
                            href={link.link}>{ link.name }
                        </a>
                    </li>   
                ))
            }
        </ul>

        <figure className='hidden md:block w-[90%] max-w-[250px] mx-auto absolute bottom-2 left-[50%] translate-x-[-50%]'>
            <img src={coffeeCup} alt="Taza de café" />
        </figure>
    </nav>
  )
}
