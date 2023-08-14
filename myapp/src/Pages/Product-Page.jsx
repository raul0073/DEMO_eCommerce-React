import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProducts } from "../Services/Utilities"
import { Link } from "react-router-dom";

import "../App.scss";

export default function ProductPageComp() {

  // get services methods
  const { getProductById, product } = useGetProducts();
  // initiolize params
  const params = useParams();
  //


  // useffect
  useEffect(() => {
    const productId = Number(params.id);
    getProductById(productId);
    sessionStorage.setItem("PROD_ID", JSON.stringify(productId));
  }, [params]);

  if (!product) {
    return <h1>Sorry, We could not get this product details at this time</h1>;
  }

  return (
    <>
      <div className="product-container">
        <div className="img">
            <img src={product.thumbnail} alt={product.title}></img>
        </div>

        <div className="details">
          <i>{product.brand}</i>
          <h3>{product.title}</h3>
          <h4>{product.category}</h4>
          <br />
          <p>{product.description}</p>
          <h2>{product.price}</h2>

          <div className="btn-container">
            <button value={product.id}>
              {" "}
              <Link to="/checkout">Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
