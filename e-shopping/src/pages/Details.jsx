import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSliece";
import DetailCom from "../components/Detail/DetailCom";
import Loading from "../components/Loading";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail, productDetailStatus } = useSelector((state) => state.products);
  console.log(productDetailStatus);
  console.log(productDetail);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      {productDetailStatus == "LOADING" ? (
        <Loading />
      ) : (
        <DetailCom productDetail={productDetail} />
      )}
    </div>
  );
};

export default Details;
