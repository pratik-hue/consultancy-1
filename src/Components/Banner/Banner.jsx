import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner from "../../assets/banner111.png";
import banner1 from "../../assets/banner2.png";
import banner2 from "../../assets/banner3.jpeg";

const Banner = () => {
  const images = [banner, banner1, banner2];

  return (
    <div className="relative bg-gray-900 h-[500px] md:h-[500px] flex items-center justify-center text-center text-white overflow-hidden shadow-lg rounded-lg mt-16">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={img}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover rounded-lg brightness-75"
            />
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
};

export default Banner;
