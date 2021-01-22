import { GET_ALL_ORDERS } from "./orderActionTypes";

const orderInitialState = {
  allOrders: {},
};
const ordersReducer = (state = orderInitialState, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: {},
      };
    default:
      return state;
  }
};

export default ordersReducer;
