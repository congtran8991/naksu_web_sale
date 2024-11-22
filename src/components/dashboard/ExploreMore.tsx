"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductItemHoz from "../common/ProductItemHoz";
const ExploreMore: React.FC = () => {
  return (
    <div className="container-custom">
      <div>Title</div>
      <div>
        Bạn có thể tìm thấy những phẩm tốt và chi phí được giảm tới 70% với
        những mẫu mã đa dạng và phù hợp với hầu bao cả các bà mẹ. Chúng tôi cam
        kết luôn mang đến cho các mẹ và bé những sản phẩm tốt nhất, chất lượng
        nhất.
      </div>
      <div className="border-[1px] border-[#ebebeb]">
        <div className="p-xl-large">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={4}
            spaceBetween={16}
            className="mySwiper"
          >
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItemHoz />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default ExploreMore;
