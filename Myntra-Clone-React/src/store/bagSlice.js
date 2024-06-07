import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: localStorage.getItem("bagItems")
    ? JSON.parse(localStorage.getItem("bagItems"))
    : [],
  reducers: {
    addToBag: (state, action) => {
      const isAlreadyPresent = state.some(
        (itemId) => itemId === action.payload
      );

      if (!isAlreadyPresent) {
        state.push(action.payload);
        localStorage.setItem("bagItems", JSON.stringify(state));
      }
    },
    removeFromBag: (state, action) => {
      state = state.filter((itemId) => itemId !== action.payload);
      localStorage.setItem("bagItems", JSON.stringify(state));
      return state;
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
