import { HIDE_SNACKBAR, SHOW_SNACKBAR } from "../actionTypes";

const initialState = {
  open: false,
  autoHideDuration: 0,
  severity: "",
  message: "",
};

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SNACKBAR:
      return {
        ...state,
        ...action.payload,
      };
    case HIDE_SNACKBAR:
      return initialState;
    default:
      return state;
  }
};
