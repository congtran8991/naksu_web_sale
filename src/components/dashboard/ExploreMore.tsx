import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
      <div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default ExploreMore;
