import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonies } from './data'
import { TestimonyItem } from "./components/TestimonyItem";
import './testimony.css'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500
};

export const Testimonies = () => {


  return (
    <section 
    id="testimonios"
    className="w-full mt-[6em] lg:mt-[10em]">
      <hr className="text-[#d6e1e2]"/>

      <div className="w-[90%] max-w-7xl mt-[4em] lg:mt-[8em] mx-auto text-center">

        <h2 className="font-titillium text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-bold">Testimonios</h2>

        <p className="mt-[1.5em] font-normal md:text-[1.2rem] lg:text-[1.3rem]">Las opiniones de quienes han trabajado conmigo se reflejan en este apartado...</p>

        <Slider {...settings} className="mt-[2.5em] lg:mt-[4em] h-[350px] sm:h-[300px] lg:h-[350px]">
  
        {
          testimonies.map( testimony => (
            <TestimonyItem 
            key={ testimony.id }
            { ...testimony } />
          ))
        }
        </Slider>
      </div>
    </section>
  )
}
