"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
  Grid,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import ProductItemVer from "../common/ProductItemVer";
const Product: React.FC = () => {
  console.log("component_product");
  return (
    <div className="container-custom">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="sm:hidden md:flex-[3] lg:block overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-28 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
          </div>

          <div className="overflow-hidden border-[1px] border-[#ebebeb] mt-large">
            <Swiper
              grid={{
                rows: 2,
                fill: 'row'
              }}
              modules={[Grid, Mousewheel, Autoplay]}
              autoplay={{ delay: 2000 }}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductItemVer />
                <div className="mx-medium border-[1px] border-[#ebebeb]"></div>
              </SwiperSlide>
              <SwiperSlide>
                <ProductItemVer />
                <div className="mx-medium border-[1px] border-[#ebebeb]"></div>
              </SwiperSlide>


              <SwiperSlide>
                <ProductItemVer />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItemVer />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="border-[1px] border-[#ebebeb] md:flex-[5] overflow-hidden">
          <div className="overflow-hidden">
            <div>Sản phẩm nổi bật</div>
            <div>
              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  Autoplay,
                ]}
                autoplay={{ delay: 2000 }}
              >
                <SwiperSlide>
                  <div className="relative">
                    <div className="h-auto w-full">
                      <img
                        className=""
                        src="https://bizweb.dktcdn.net/thumb/grande/100/117/632/products/aovay1.jpg?v=1473603655807"
                      />
                    </div>
                    <div className="absolute bottom-0 text-center w-full h-[40%] bg-[#ebebeb]">
                      <div className="block">
                        <div>Giá 1</div>
                        <div>Giá 2</div>
                      </div>
                      <div>Tên váy</div>
                      <div>Click Mua</div>
                    </div>
                    <div className="absolute top-0 right-0">9%</div>
                  </div>
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
          </div>
        </div>
        <div className="bg-red-200 p-4 md:flex-[5] h-fit">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative w-full">
                <div className="w-full">
                  <img src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790" />
                </div>
                <div className="absolute w-full bottom-0 text-center">Giá</div>
              </div>
              <div className="text-center">Description</div>
              <div className="text-center">Click Mua Ngay</div>
            </div>

            <div>
              <div className="relative w-full">
                <div className="w-full">
                  <img src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790" />
                </div>
                <div className="absolute w-full bottom-0 text-center">Giá</div>
              </div>
              <div className="text-center">Description</div>
              <div className="text-center">Click Mua Ngay</div>
            </div>
          </div>

          <div className="text-center">Xem toàn bộ sản phẩm</div>
        </div>
      </div>
    </div>
  );
};
export default Product;
