import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myCart: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.myCart.push(action.payload);
    },
  },
});

export const { addToCart } = cartReducer.actions;

export default cartReducer.reducer;
