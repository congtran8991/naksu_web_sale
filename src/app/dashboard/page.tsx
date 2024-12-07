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

export default function Dashboard() {
  // const {} = await  getTranslation()

  return (
    <div className="grid gap-4">
      {/* <TestA/> */}
      {/* <button>{locale}</button>
      <div>{t("welcome")}</div>; */}

      <Carousel />

      <Product />

      <PoliceAndInstruct />

      <ExploreMore />

      <NewPost />
    </div>
  );
}
