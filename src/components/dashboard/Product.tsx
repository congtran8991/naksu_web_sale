import React from "react";

const Product: React.FC = () => {
  return (
    <div className="container-custom">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="sm:hidden md:flex-[3] lg:block">
          <div className="grid grid-cols-2">
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
            <div className="h-24 border-[1px] border-[#ebebeb] bg-no-repeat bg-center bg-[length:65%]  bg-clip-border bg-[url('https://bizweb.dktcdn.net/100/117/632/themes/157694/assets/logo1.png?1564585558451')]" />
          </div>
        </div>

        <div className="bg-green-200 p-4 md:flex-[5]">Phần 2 (5 phần)</div>
        <div className="bg-red-200 p-4 md:flex-[5]">Phần 2 (5 phần)</div>
      </div>
    </div>
  );
};
export default Product;
