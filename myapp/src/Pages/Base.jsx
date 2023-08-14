// BaseComp.jsx
import React, { useEffect } from "react";
import { useGetProducts } from "../Services/Utilities.jsx";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import ProductBoxComp from "../Components/Product-Card.jsx";
import ProductPageComp from "../Pages/Product-Page.jsx";
import CheckoutComp from "../Pages/Checkout.jsx";
import CheckoutStep2Comp from "../Components/CheckoutStep2.jsx";
import CheckoutStep1Comp from "../Components/CheckoutStep1.jsx";
import CheckoutFinalStepComp from "../Components/CheckoutFinalStep.jsx";
import OrderCompletedComp from "../Components/Order-Completed.jsx";
import CartComp from "../Pages/Cart";
import cartIcon from "../assets/navCart.png";
import userIcon from "../assets/user.png";

import "../App.scss";

function BaseComp() {
  const { getAllProducts, products } = useGetProducts();
  const navigate = useNavigate();

  const navToCart = () => {
    navigate("/cart");
  };


  useEffect(() => {
    getAllProducts();
  }, []);


  return (
    <>
      <main className="main-container">
        <section>
          <div className="promotion-bar"></div>
          <div className="navbar">
            <div className="logo">
              <Link to="/" className="logo">
                Old Mart
              </Link>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search for product"
            />
            <div className="cart">
              <img src={userIcon} alt="" />
              <img src={cartIcon} alt="" onClick={navToCart}/>
            </div>
          </div>
        </section>

        <Outlet />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {products.length > 0 ? (
                  <div className="products-grid">
                    {products.map((product) => (
                      <ProductBoxComp
                        key={product.id}
                        product={product}
                      ></ProductBoxComp>
                    ))}
                  </div>
                ) : (
                  <p style= {{"textAlign": "center", "fontSize": "5rem"}}>Loading...</p>
                )}
              </>
            }
          />

          <Route path="/products/:id" element={<ProductPageComp />} />
          <Route path="/cart" element={<CartComp />} />
          <Route path="/checkout" element={<CheckoutComp />}>
            <Route path="/checkout/" element={<CheckoutStep1Comp />} />
            <Route path="/checkout/address" element={<CheckoutStep2Comp />} />
            <Route
              path="/checkout/pre-order"
              element={<CheckoutFinalStepComp />}
            />
            <Route
              path="/checkout/order-completed"
              element={<OrderCompletedComp />}
            />
          </Route>
        </Routes>

        <footer className="footer">
          <h2>Footer</h2>
        </footer>
      </main>
    </>
  );
}

export default BaseComp;
