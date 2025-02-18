import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const jokeSlice = createSlice({
  name: "joke",
  initialState,
  reducers: {
    addJoke(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addJoke } = jokeSlice.actions;
//export const { reducer } = jokeSlice.reducer;
export { jokeSlice };
