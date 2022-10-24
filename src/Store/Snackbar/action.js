import { HIDE_SNACKBAR, SHOW_SNACKBAR } from "../actionTypes";

export const showSnackbar = (snackbar) => {
  return {
    type: SHOW_SNACKBAR,
    payload: snackbar,
  };
};

export const hideSnackbar = () => {
  return {
    type: HIDE_SNACKBAR,
  };
};
