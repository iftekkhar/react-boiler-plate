import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllProducts,
  getFilteredProducts,
} from "../redux/products/productsActions";

const Home = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => dispatch(getFilteredProducts())}>
        {" "}
        Filter Products
      </button>
      <button onClick={() => dispatch(getAllProducts())}>
        {" "}
        Get All Products
      </button>
      {products.map((product) => (
        <p>{product.id}</p>
      ))}
    </div>
  );
};

export default Home;
