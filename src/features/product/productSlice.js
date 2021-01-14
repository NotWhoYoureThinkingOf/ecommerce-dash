import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
  },
  reducers: {
    grab: (state, action) => {
      state.product = action.payload;
    },
    release: (state) => {
      state.product = null;
    },
  },
});

export const { grab, release } = productSlice.actions;

export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;
