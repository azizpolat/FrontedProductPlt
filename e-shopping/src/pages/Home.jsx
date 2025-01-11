import React, { useState } from "react";
import SliderCom from "../components/Home/SliderCom";
import SortLing from "../components/Home/SortLing";
import Category from "../components/Home/Category";
import Products from "../components/Home/Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState();
  return (
    <div>
      <SliderCom />
      <SortLing setSort={setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
