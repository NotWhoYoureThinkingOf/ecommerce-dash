import { createSlice } from "@reduxjs/toolkit";

export const miceSlice = createSlice({
  name: "mice",
  initialState: {
    mice: [],
  },
  reducers: {
    grabMice: (state, action) => {
      state.mice = [...state.mice, action.payload];
    },
    releaseMice: (state) => {
      state.mice = [];
    },
  },
});

export const { grabMice, releaseMice } = miceSlice.actions;

export const selectMice = (state) => state.mice.mice;

export default miceSlice.reducer;
