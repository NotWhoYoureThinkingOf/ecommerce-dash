import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: null,
  },
  reducers: {
    grabSearch: (state, action) => {
      state.search = action.payload;
    },
    releaseSearch: (state) => {
      state.search = null;
    },
  },
});

export const { grabSearch, releaseSearch } = searchSlice.actions;

export const selectSearch = (state) => state.search.search;

export default searchSlice.reducer;
