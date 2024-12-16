import { configureStore } from "@reduxjs/toolkit";
import wineSlice from "./slices/wine-slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    wine: wineSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
