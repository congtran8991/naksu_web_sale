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
import ProductItemHoz from "../common/ProductItemHoz";
import Image from "next/image";
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
                rows: 4,
                fill: "row",
              }}
              modules={[Grid, Mousewheel, Autoplay]}
              autoplay={{ delay: 2000 }}
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

              <SwiperSlide>
                <ProductItemVer />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItemVer />
              </SwiperSlide>

              <SwiperSlide>
                <ProductItemVer />
              </SwiperSlide>
              <SwiperSlide>
                <ProductItemVer />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="h-40 bg-[#e3b3c9] mt-large">
            <div>
              <div className="text-center">hotline</div>
              <div className="mx-medium border-[1px] border-[#ebebeb]"/>
              <div className="text-center">0963.647.129</div>
            </div>
          </div>
        </div>

        <div className="md:flex-[10] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:flex-[5] border-[1px] border-[#ebebeb] overflow-hidden">
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

            <div className="md:flex-[5] h-fit">
              <div className="grid grid-cols-1 mn:grid-cols-2 gap-4">
                <ProductItemHoz />
                <ProductItemHoz />
                <div className="text-center">Xem toàn bộ sản phẩm</div>
              </div>
            </div>
          </div>

          <div className="New Product">
            <div>Hàng mới về</div>
            <div className="border-[1px] border-[#ebebeb]">
              <div className="grid gap-4 px-medium py-large sm:grid-cols-2 md:grid-cols-4">
                <div className="w-full">
                  <ProductItemHoz />
                </div>
                <div className="w-full">
                  <ProductItemHoz />
                </div>
                <div className="w-full">
                  <ProductItemHoz />
                </div>
                <div className="w-full">
                  <ProductItemHoz />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-full h-64">
              <Image
                src="https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/banner1.gif?1564585558451"
                alt="Shoe image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
