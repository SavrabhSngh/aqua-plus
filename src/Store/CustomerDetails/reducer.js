import { SAVE_CUSTOMER_DETAILS, CLEAR_CUSTOMER_DETAILS } from "../actionTypes";

const initialState = [];

export const customerDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CUSTOMER_DETAILS:
      return [...action.payload];
    case CLEAR_CUSTOMER_DETAILS:
      return initialState;
    default:
      return state;
  }
};
