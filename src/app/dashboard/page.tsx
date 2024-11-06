import Carousel from "@/components/dashboard/Carousel";
// import { Test } from 'vite-app/UI-Base/src';
import { TestA } from "vite-app/UI-Base";
import "swiper/css";
import PoliceAndInstruct from "@/components/dashboard/PoliceAndInstruct";
import Product from "@/components/dashboard/Product";
import ExploreMore from "@/components/dashboard/ExploreMore";
import NewPost from "@/components/dashboard/NewPost";

export const dynamic = "force-dynamic";

export async function getTranslation() {
  return {};
}

export default async function Dashboard() {
  // const {} = await  getTranslation()

  return (
    <div className="grid gap-4">
      {/* <TestA/> */}
      {/* <button>{locale}</button>
      <div>{t("welcome")}</div>; */}
      <div className="h-14">
        <div className="container h-full">
          <ul className="float-left flex items-center space-x-1  h-full">
            <li>Đăng nhập</li>
            <li>Đăng kí</li>
          </ul>

          <ul className="float-right flex items-center space-x-1  h-full">
            <li>Tìm kiếm</li>
            <li>Giỏ hàng</li>
          </ul>
        </div>
      </div>

      <div className="h-16">
        <div className="container h-full px-5">
          <ul className="float-left flex  items-center space-x-2 h-full">
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Dịch vụ</li>
          </ul>

          <ul className="float-right flex  items-center space-x-2 h-full">
            <li>Sản phẩm</li>
            <li>Tin tức</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>

      <Carousel />

      <Product />

      <PoliceAndInstruct />

      <ExploreMore />

      <NewPost />
    </div>
  );
}
