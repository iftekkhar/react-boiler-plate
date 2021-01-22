import { GET_ALL_PRODUCTS, FILTER_ALL_PRODUCTS } from "./productsActionTypes";

const productsInitialSate = {
  allProducts: [],
  onlineProducts: [],
  offlineProducts: [],
  reviewProducts: [],
  draftProducts: [],
};

const productsReducer = (state = productsInitialSate, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {
        allProducts: payload,
      };
    case FILTER_ALL_PRODUCTS:
      return {
        allProducts: payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
