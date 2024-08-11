import { useState } from "react";


export const ProjectItem = ({ title, technologies, index, logo, background, description, link }) => {

  const [toggleCardProject, setToggleCardProject] = useState( false );
  

  const proyectBackground = `/assets/landing/${background}.webp`;
  const proyectLogo = `/assets/landing/${logo}.png`


  return (
    <div className="relative w-full h-[210px] sm:h-[280px] md:h-[250px]  rounded-2xl lg:h-[280px] xl:h-[260px] overflow-hidden">
      <figure className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
        <img
          src={proyectBackground}
          alt={title}
          className="w-full h-full border-green border" />
      </figure>

      <span className={`${index == 0 ? 'bg-[#1245788b]' : index == 1 ? 'bg-[#2c611d7b]' : 'bg-[#3f105694]'} absolute inset-0 rounded-2xl`} ></span>


      <div className="absolute z-1 inset-0 flex justify-center items-center border-white border gap-2 flex-col">
        {
          logo === '' ? null :
            <figure className="w-[60px]">
              <img src={proyectLogo} alt={logo} />
            </figure>
        }
        <h3 className="text-white font-titillium text-[2rem]">{title}</h3>
      
        <figure className="absolute flex gap-2 items-center justify-center bottom-3">
          {
            technologies.map( technologie => (
              <img
              key={ technologie } 
              src={`/assets/landing/${technologie}.svg`} 
              alt={ technologie }
              className={`${ technologie == 'astrojs' ? 'w-[15px]' : 'w-[25px]'}`} />
            ))
          }
        </figure>
      </div>

      <div 
      onClick={ () => setToggleCardProject( !toggleCardProject ) }
      className={`absolute z-20 inset-0 bg-gradient-to-r transition-opacity ease-in-out duration-300 from-[#252526] to-[#272721] px-[1em] flex flex-col justify-center items-center ${ toggleCardProject ? 'opacity-100' : 'opacity-0' } xl:opacity-0 hover:xl:opacity-100`}>
        <p className="text-white mb-[1em] font-normal">{ description }</p>

        <a 
        href={ link } 
        target="_blank" 
        className="text-white font-titillium font-medium border border-yellow rounded-full px-[1em] text-[1.2rem] hover:bg-yellow hover:text-gray transition-all">Visitar &gt;</a>
      </div>

    </div>
  )
}
