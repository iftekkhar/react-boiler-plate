import { GET_ALL_ORDERS } from "./orderActionTypes";

export const showAllOrders = () => {
  return {
    type: GET_ALL_ORDERS,
  };
};
