import { createSlice } from "@reduxjs/toolkit";

export const headsetsSlice = createSlice({
  name: "headsets",
  initialState: {
    headsets: [],
  },
  reducers: {
    grabHeadsets: (state, action) => {
      state.headsets = [...state.headsets, action.payload];
    },
    releaseHeadsets: (state) => {
      state.headsets = [];
    },
  },
});

export const { grabHeadsets, releaseHeadsets } = headsetsSlice.actions;

export const selectHeadsets = (state) => state.headsets.headsets;

export default headsetsSlice.reducer;
