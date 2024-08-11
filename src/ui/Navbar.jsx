import logo from "../../public/assets/logo.webp";
import { BurguerMenu } from "./components";
import './ui.css'

export const Navbar = () => {



  return (
    <>
      <div className="w-full h-[60px] md:h-[100px]">
        <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center h-full">

          <figure className="w-[45px] md:w-[70px] object-center object-cover">
            <img src={logo} alt="Logo de mi portafolio" />
          </figure>
          
          <BurguerMenu />

        </div>
      </div>
    </>
  )
}
