// Utilities.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);

  const getAllProducts = async () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      let data = res.data;
      setProducts(data.products);
    });
  };

  const getProductById = async (id) => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  return { getAllProducts, products, getProductById, product };
};

