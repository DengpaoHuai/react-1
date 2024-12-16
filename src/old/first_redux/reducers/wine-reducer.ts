import { Wine } from "../../schemas/wine.schema";
import { ADD_WINE, SET_ALL_WINES } from "../actions/wine-actions";

type InitialWineState = {
  wines: Wine[];
};

const initialState: InitialWineState = {
  wines: [],
};

const wineReducer = (
  state = initialState,
  action: {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
  }
) => {
  switch (action.type) {
    case SET_ALL_WINES:
      console.log(action.payload);
      return {
        ...state,
        wines: action.payload,
      };

    case ADD_WINE:
      return {
        ...state,
        wines: [...state.wines, action.payload],
      };
    default:
      return state;
  }
};

export default wineReducer;
