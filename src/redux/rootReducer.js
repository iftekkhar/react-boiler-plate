import { combineReducers } from "redux";
import ordersReducer from "./orders/orderReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  orders: ordersReducer,
});

export default rootReducer;
