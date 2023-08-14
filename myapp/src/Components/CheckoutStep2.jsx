import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, Routes, Route } from "react-router-dom";

import "../App.scss";
import "../Pages/Checkout";

export default function CheckoutStep2Comp() {
  // set state for user detals
  const [userDetails, setUserDetails] = useState({
    City: "",
    Street: "",
    Zipcode: "",
  });
  const navitage = useNavigate();

  // get data from storage and set this user details
  const getUserDetailsSoFar = () => {
    let data = sessionStorage.getItem("USER_DETAILS");
    data = JSON.parse(data);
    setUserDetails({ ...data });
    console.log(userDetails);
  };

  // add address to storage
  const addAddressToUserDetails = () => {
    // if all good, create user obj for storage
    sessionStorage.setItem("USER_DETAILS", JSON.stringify(userDetails));
    return navitage("/checkout/pre-order");
  };
  useEffect(() => {
    getUserDetailsSoFar();
  }, []);
  // html
  return (
    <>
    <h2 style={{"textAlign" : "center"}}>Checkout</h2>
      <div className="checkout-container">
        <form>
          <legend>Step 2: Fill your shipping address below</legend>
          <div className="form-content">
            <label>City:</label>
            <input
              type="text"
              onChange={(e) =>
                setUserDetails((uD) => ({ ...uD, City: e.target.value }))
              }
            />
            <label>Street:</label>
            <input
              type="text"
              onChange={(e) =>
                setUserDetails((uD) => ({ ...uD, Street: e.target.value }))
              }
            />
            <label>Zipcode:</label>
            <input
              type="numbers"
              onChange={(e) =>
                setUserDetails((uD) => ({ ...uD, Zipcode: e.target.value }))
              }
            />
          </div>
        </form>
        <div className="btn-container">
          <button onClick={addAddressToUserDetails}>Continue</button>
        </div>
      </div>
    </>
  );
}
