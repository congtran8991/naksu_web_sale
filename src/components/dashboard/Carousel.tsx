"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Carousel: React.FC = () => {
  console.log();
  return (
    <div className="max-w-[100vw] overflow-auto">
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper  mn:h-80 lg:h-slide"
      >
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full"
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
