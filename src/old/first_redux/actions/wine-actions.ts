import { Wine } from "../../schemas/wine.schema";

export const SET_ALL_WINES = "SET_ALL_WINES";
export const ADD_WINE = "ADD_WINE";

export const setAllWines = (wines: Wine[]) => {
  return {
    type: SET_ALL_WINES,
    payload: wines,
  };
};

export const addWine = async (wine: Wine) => {
  return {
    type: ADD_WINE,
    payload: wine,
  };
};
