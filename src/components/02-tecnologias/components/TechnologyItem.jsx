import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { LiaServerSolid } from "react-icons/lia";
import { GrDeploy } from "react-icons/gr";



export const TechnologyItem = ({ title, description, technology, index }) => {

    

  return (
    <div className="text-center flex-1 flex flex-col items-center justify-center border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-[#E6ECF8] py-[2em] lg:py-[4em] px-[1em] lg:px-[2em] ">
        <span className="bg-green rounded-full text-[3rem] p-[.2em] shadow-md">
          {
            index === 0 
            ? <LiaServerSolid />
            : index === 1
            ? <MdOutlineScreenshotMonitor />
            : <GrDeploy /> 
          }
        </span>

        <h2 className="mt-[.5em] lg:mt-[1em] font-titillium text-[1.5rem] sm:text-[1.8rem] text-blue ">{ title }</h2>
        <p className="mt-[1em] lg:mt-[1.5em] sm:text-[1.1rem]">{ description }</p>
          
        <h3 className="mt-[1.5em] lg:mt-[2.5em] text-[1.1rem] sm:text-[1.2rem] text-blue font-medium">Tecnologías</h3>
        <p className="sm:text-[1rem] lg:mt-[.5em]">{ technology }</p>
    </div>
  )
}
