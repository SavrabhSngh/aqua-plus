import { SAVE_CUSTOMER_DETAILS, CLEAR_CUSTOMER_DETAILS } from "../actionTypes";

export const saveCustomerDetails = (customerInfo) => {
  return {
    type: SAVE_CUSTOMER_DETAILS,
    payload: customerInfo,
  };
};

export const clearCustomerDetails = () => {
  return {
    type: CLEAR_CUSTOMER_DETAILS,
  };
};
