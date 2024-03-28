import { configureStore } from "@reduxjs/toolkit";
import filterReducer from '../redux-store/filterSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});
