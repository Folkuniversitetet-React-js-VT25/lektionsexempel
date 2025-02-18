import { configureStore } from "@reduxjs/toolkit";
import { jokeSlice } from "@jokeApp/reducers";
const store = configureStore({
  reducer: {
    jokes: jokeSlice.reducer,
  },
});

export { store };
