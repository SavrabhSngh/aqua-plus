import { SAVE_ACCOUNT_DETAILS, CLEAR_ACCOUNT_DETAILS } from "../actionTypes";

const initialState = {
  name: "",
};

export const accountDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ACCOUNT_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_ACCOUNT_DETAILS:
      return initialState;
    default:
      return state;
  }
};
