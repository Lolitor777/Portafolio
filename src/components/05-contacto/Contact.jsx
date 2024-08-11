import { ContactForm } from "./components/ContactForm"
import logo from '../../../assets/logo.webp'
import './contact.css'

export const Contact = () => {


  return (
    <section className="w-full h-[100vh] relative bg-blue overflow-hidden">

      <div className="mt-[2em] lg:mt-[4em] relative z-30">
        <div className="w-full h-[1px] bg-[#d6e1e2] absolute bottom-[50%] z-0"></div>
        <figure className="w-[70px] lg:w-[80px] bg-white rounded-full p-[.2em] mx-auto relative z-10">
          <img src={logo} alt="Logo de Victor" />
        </figure>
      </div>


      <div className="w-[90%] mx-auto pt-[2em] max-w-7xl flex flex-col justify-center items-center absolute inset-0 z-10">


        <ContactForm />

      </div>

      <div className="bg-[#f0eeee] h-[50vh] w-full absolute bottom-0 z-0"></div>



    </section>
  )
}
