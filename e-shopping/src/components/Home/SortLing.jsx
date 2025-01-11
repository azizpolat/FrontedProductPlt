import React from "react";

const SortLing = ({ setSort }) => {
  return (
    <div className="bg-gray-100 my-5 p-5 items-center justify-end flex">
      <select
        onChange={(e) => e.target.value}
        className="bg-gray-200 py-3 px-5 border rounded-xl outline-none"
        name=""
        id=""
      >
        <option selected disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default SortLing;
