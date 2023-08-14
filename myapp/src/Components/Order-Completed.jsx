import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProducts } from "../Services/Utilities";
import { Link, useNavigate } from "react-router-dom";

import "../App.scss";

export default function OrderCompletedComp() {

  const nav = useNavigate();
  
  const redirectToHomePage = () =>{
    setTimeout(()=> {
      nav("/");
    }, 2000);
  }

  useEffect(()=>{
    redirectToHomePage()
  },[])


  // template
  return (
    <>

    <h1 style={{"textAlign" : "center"}}>Order Completed &#x2714;</h1>
     <div className="checkout-container">
    <h2>You will be redirected to home page &#x2302;</h2>
     </div>
    </>
  );
}
