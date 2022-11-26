import { SAVE_ACCOUNT_DETAILS, CLEAR_ACCOUNT_DETAILS } from "../actionTypes";

export const saveAccountDetails = (accontInfo) => {
  return {
    type: SAVE_ACCOUNT_DETAILS,
    payload: accontInfo,
  };
};

export const clearAccountDeatils = () => {
  return {
    type: CLEAR_ACCOUNT_DETAILS,
  };
};
