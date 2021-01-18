import { createSlice } from "@reduxjs/toolkit";

export const keyboardsSlice = createSlice({
  name: "keyboards",
  initialState: {
    keyboards: [],
  },
  reducers: {
    grabKeyboards: (state, action) => {
      state.keyboards = [...state.keyboards, action.payload];
    },
    releaseKeyboards: (state) => {
      state.keyboards = [];
    },
  },
});

export const { grabKeyboards, releaseKeyboards } = keyboardsSlice.actions;

export const selectKeyboards = (state) => state.keyboards.keyboards;

export default keyboardsSlice.reducer;
