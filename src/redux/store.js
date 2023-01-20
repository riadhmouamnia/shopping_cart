import { configureStore } from "@reduxjs/toolkit";
import { producReducer } from "../features/productsSlice";

import { cartReducer } from "../features/cartSlice";

export default configureStore({
  reducer: {
    prodcuts: producReducer,
    cart: cartReducer,
  },
});
