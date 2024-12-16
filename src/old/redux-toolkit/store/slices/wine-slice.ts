import { createSlice } from "@reduxjs/toolkit";
import { Wine } from "../../schemas/wine.schema";
import { setAllWines } from "../thunk-actions/wine-thunk";

type InitialWineState = {
  wines: Wine[];
  isLoading: boolean;
  error: null | string;
};

const initialState: InitialWineState = {
  wines: [],
  isLoading: false,
  error: null,
};

//pending, fulfilled, rejected

const wineSlice = createSlice({
  name: "wine",
  initialState,
  reducers: {
    setAllWines(state, action) {
      state.wines = action.payload;
    },
    addWine(state, action) {
      state.wines.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAllWines.fulfilled, (state, action) => {
        console.log(action);
        state.wines = action.payload;
        state.isLoading = false;
      })
      .addCase(setAllWines.rejected, (state, action) => {
        console.log(action.error);
        state.error = action.error.message!;
        state.isLoading = false;
      })
      .addCase(setAllWines.pending, (state, action) => {
        state.isLoading = true;
        console.log(action);
      });
  },
});

export const { addWine } = wineSlice.actions;

export default wineSlice.reducer;
