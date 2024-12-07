"use client";
import Image from "next/image";

const ProductItemVer: React.FC = () => {
  return (
    <div className="list product best sales">
      <div className="grid grid-cols-12 w-full px-medium py-large">
        <div className="col-span-5 border-[1px] border-[#ebebeb]">
          <Image
            src="https://bizweb.dktcdn.net/thumb/large/100/117/632/products/giay5-6ad05ccc-be71-4eca-83f8-3e73a5570372-42da6097-d9b3-437a-afe5-66c1be4352b4-8a365fca-ef0a-415a-838e-f172e148cb7c.jpg?v=1473603367790"
            alt="Shoe image"
            width={500} // Giá trị pixel cụ thể
            height={300} // Giá trị pixel cụ thể
          />
        </div>
        <div className="col-span-7 pl-medium">
          <div>Váy liền thân Kid-02</div>
          <div>250000đ</div>
          <div>275000đ</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemVer;
