import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`products/${product.id}`)}
      className="w-[420px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer hover:bg-neutral-100"
    >
      <div className="text-xl mt-3 p-3 font-bold absolute top-0 right-0 bg-orange-100 text-black">
        {product?.price} TL
      </div>
      <img
        className="w-[200px] h-[200px] object-contain m-auto"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 text-xl font-bold">{product?.title}</div>
    </div>
  );
};

export default Product;
