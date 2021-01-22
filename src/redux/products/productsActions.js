import axios from "axios";
import { GET_ALL_PRODUCTS, FILTER_ALL_PRODUCTS } from "./productsActionTypes";

export const getAllProducts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({
    type: GET_ALL_PRODUCTS,
    payload: response.data,
  });
};
export const getFilteredProducts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  dispatch({
    type: FILTER_ALL_PRODUCTS,
    payload: response.data,
  });
};
