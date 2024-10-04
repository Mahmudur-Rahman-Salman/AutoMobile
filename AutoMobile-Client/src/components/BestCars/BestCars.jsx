// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";
import { Pagination, Autoplay } from "swiper/modules";

import audi from "../../assets/Images/cars/Audi Q3.png";
import bmw from "../../assets/Images/cars/BMW X7.png";
import hyundai from "../../assets/Images/cars/Hyundai i20 N Line.png";
import lamborghini from "../../assets/Images/cars/Lamborghini Huracan STO.png";
import landRover from "../../assets/Images/cars/Land Rover Range Rover.png";
import mahindra from "../../assets/Images/cars/Mahindra Global Pik Up.png";
import mercedes from "../../assets/Images/cars/Mercedes-Benz AMG C 43.png";
import porshe from "../../assets/Images/cars/Porsche 718.png";
import rollsRoyace from "../../assets/Images/cars/Rolls-Royce Phantom.png";
import toyota from "../../assets/Images/cars/Toyota Land Cruiser.png";
import volvo from "../../assets/Images/cars/Volvo XC60.png";

const BestCars = () => {
  return (
    <>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl uppercase border-y-4 py-4">Explore the best selling Cars</h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={audi} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bmw} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lamborghini} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={landRover} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={volvo} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={porshe} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rollsRoyace} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mercedes} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={toyota} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mahindra} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hyundai} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BestCars;
