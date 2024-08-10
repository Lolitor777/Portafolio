import { Link } from 'react-router-dom';
import logo from '../../../assets/landing/logo.webp'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './footer.css'

export const Footer = () => {
    return (
        <section className="bg-gradient-to-tr from-[rgb(15,182,220)] to-blue w-full mt-[10em]">

            <div className="w-[90%] max-w-7xl mx-auto relative">

                <div className="flex flex-col lg:flex-row justify-between lg:justify-center lg:gap-[5em] items-center lg:h-[150px] bg-gray relative top-[-4em] lg:top-[-75px] rounded-xl p-[1em]  ">
                    <h2 className="text-white font-titillium text-[2rem] lg:text-[2.5rem]">Empecemos</h2>

                    <p className="text-white mt-[1em] lg:mt-0 text-center font-normal lg:font-semibold lg:w-[450px]">Estoy emocionado de conectar contigo y formar una posible amistad. No dudes en ponerte en contacto.</p>

                    <Link 
                    to='contact'
                    className="text-white mt-[1.5em] lg:mt-0 border border-yellow px-[1.5em] lg:py-[.3em] text-[1.2rem] lg:text-[1.4rem] lg:hover:bg-yellow lg:hover:text-gray rounded-full active:bg-yellow active:text-gray transition">
                        ¡Vamos!
                    </Link>
                </div>

                <figure className='w-[80px] mx-auto mt-[-2em]'>
                    <img src={logo} alt="Logo de Victor" className='w-full object-center object-cover' />
                </figure>

                <div className='flex justify-center mt-[1.5em] gap-[.5em]'>
                    <Link
                    target='_blank' 
                    to='https://www.facebook.com/profile.php?id=100010443995497' 
                    className=' text-white border text-[1.5rem] p-[.3em] rounded-full lg:hover:bg-gray lg:hover:border-gray transition'>
                        <FaFacebookF fill='#fff' />
                    </Link>

                    <Link
                    target='_blank' 
                    to='https://www.instagram.com/vc_1539/'
                    className='text-white border text-[1.5rem] p-[.3em] rounded-full lg:hover:bg-gray lg:hover:border-gray transition'>
                        <AiFillInstagram fill='white'/>
                    </Link>

                    <Link
                    target='_blank' 
                    to='https://www.linkedin.com/in/victor-carvajal-dev/'
                    className='text-white border text-[1.5rem] p-[.3em] rounded-full lg:hover:bg-gray lg:hover:border-gray transition'>
                        <FaLinkedinIn fill='white'/>
                    </Link>
                </div>

                <small  className='text-center block mt-[2em] pb-[1em] font-titillium'>Victor Manuel Carvajal - 2024</small>



            </div>
        </section>
    )
}
