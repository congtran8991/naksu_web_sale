import React from "react";

const Product: React.FC = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-200 p-4 sm:hidden md:flex-[3] lg:block">
          Phần 1 (3 phần)
        </div>

        <div className="bg-green-200 p-4 md:flex-[5]">Phần 2 (5 phần)</div>
        <div className="bg-red-200 p-4 md:flex-[5]">Phần 2 (5 phần)</div>
      </div>
    </div>
  );
};
export default Product;
