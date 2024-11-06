"use client"
const ProductItem: React.FC = () => {
  return (
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
  );
};

export default ProductItem;
