import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProducts } from "../Services/Utilities";
import { Link, useNavigate } from "react-router-dom";

import "../App.scss";

export default function CheckoutFinalStepComp() {

  const navitage = useNavigate();

  //fetch custom hook
  const { getProductById, product } = useGetProducts();
  // user details obj
  const [userDetails, setUserDetails] = useState({});
  // product id
  const [thisProductId, setThisProductId] = useState(0);

  const getAllPageData = () => {
    // get user details from storage
    let data = sessionStorage.getItem("USER_DETAILS");
    data = JSON.parse(data);
    // update userdetails
    setUserDetails({ ...data });

    // get the product id
    let id = sessionStorage.getItem("PROD_ID");
    id = JSON.parse(id);
    setThisProductId(Number(id));
  };

  const goToOrderCompleted = () => {
    return navitage("/checkout/order-completed");
  }

  useEffect(() => {
    getAllPageData();
    getProductById(thisProductId);
  }, [product, thisProductId]);

  // template
  return (
    <>
    <h2 style={{"textAlign" : "center"}}>Order Summary</h2>
      <div className="checkout-container grid">
        <form>
        {/* personal details */}
          <div className="form-content grid">
          <legend>Shipping & Billing</legend>
          <p>Personal Details</p>
            <div className="personal">
            <label>Full Name: </label>
            <input type="text"value={`${userDetails.First_Name} ${userDetails.Last_Name}`}/>
            </div>
            <p>Shipping Details</p>
          <div className="address">
          {/* address details */}
          
            <label>City: </label>
            <input type="text" value={userDetails.City} />
            <label>Street: </label>
            <input type="text" value={userDetails.Street} />
            <label>Zipcode: </label>
            <input type="text" value={userDetails.Zipcode} /><br/>
          </div>
          
            
          </div>
          
        </form>
      

          {/* product details */}
          
        <div className="product-container final">
          
          <div className="img">
            <div className="mainImg">
              <img src={product.thumbnail} alt={product.title}></img>
            </div>
          </div>
          
          <div className="details">
            <i>{product.brand}</i><br/>
            <h3>{product.title}</h3>
            <br />
            <h2>{product.price}</h2>
            <div className="btn-container">
              <button onClick={goToOrderCompleted}>Complete Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
