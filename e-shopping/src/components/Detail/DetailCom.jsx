import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const DetailCom = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < productDetail?.rating?.count) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity === 0) {
      return setQuantity(0);
    }
    setQuantity(quantity - 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[500px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-5xl font-bold">{productDetail?.title}</div>
        <div className="text-2xl my-5 ">{productDetail?.description}</div>
        <div className="text-2xl font-bold my-5  text-blue-500">
          Rating : {productDetail?.rating?.rate}
        </div>
        <div className="text-2xl font-bold my-5  text-blue-500">
          Count : {productDetail?.rating?.count}
        </div>
        <div className="text-4xl font-bold my-5">
          {productDetail?.price} <span className="text-xl font-semibold">TL</span>
        </div>
        <div className="flex items-center gap-5">
          <div onClick={decrement} className="cursor-pointer text-4xl">
            -
          </div>
          <input
            className="w-5 text-center text-2xl w-20 h-10 font-bold outline-none"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="cursor-pointer  text-4xl">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className="bg-green-300 mt-5 border text-2xl rounded-md cursor-pointer  w-[200px] h-16 items-center justify-center flex hover:bg-green-600"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailCom;
