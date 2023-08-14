import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, Routes, Route } from "react-router-dom";

import "../App.scss";
import "../Pages/Checkout.scss";

export default function CheckoutStep1Comp() {
  // set state for user detals
  const [userDetails, setUserDetails] = useState({
    First_Name: "",
    Last_Name: "",
  });
  const navitage = useNavigate();

  // check if form is valid
  const handleFirstStep = () => {
    // get values
    const firstName = userDetails.First_Name.trim();
    const lastName = userDetails.Last_Name.trim();

    // alert each input separately
    if (firstName.length === 0) {
      alert("Please enter a valid first name.");
      return;
    }

    if (lastName.length === 0) {
      alert("Please enter a valid last name.");
      return;
    }

    // if all good, create user obj for storage
    const uD = {
      First_Name: firstName,
      Last_Name: lastName,
    };

    // set user object to storage
    sessionStorage.setItem("USER_DETAILS", JSON.stringify(uD));
    return navitage("/checkout/address");
  };

  // html
  return (
    <>

      <Outlet />
      <h2 style={{"textAlign" : "center"}}>Checkout</h2>
      <div className="checkout-container">
        <form>
          <legend>Step 1: Fill you details below</legend>
          <div className="form-content">
            <label>First Name:</label>
            <input
              type="text"
              name="fname"
              value={userDetails.First_Name}
              required
              onChange={(e) =>
                setUserDetails((uD) => ({ ...uD, First_Name: e.target.value }))
              }
            />
            <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="lname"
              value={userDetails.Last_Name}
              required
              onChange={(e) =>
                setUserDetails((uD) => ({ ...uD, Last_Name: e.target.value }))
              }
            />
          </div>
        </form>
        <div className="btn-container">
          <button onClick={handleFirstStep}>Continue</button>
        </div>
      </div>
    </>
  );
}
