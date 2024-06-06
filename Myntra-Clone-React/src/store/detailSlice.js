import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    id: null,
  },
  reducers: {
    showDetails: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const detailActions = detailSlice.actions;

export default detailSlice;
