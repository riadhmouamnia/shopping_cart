import { createSlice } from "@reduxjs/toolkit";
import products from "../db/db";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [...products],
  },
  reducers: {},
});

export const producReducer = productsSlice.reducer;
