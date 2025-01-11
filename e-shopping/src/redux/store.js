import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productSlice from "./productSliece";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productSlice,
    carts: cartSlice,
  },
});
