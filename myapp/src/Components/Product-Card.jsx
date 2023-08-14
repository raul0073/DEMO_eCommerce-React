import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch } from 'react-redux'
import "../App.scss";
import "./Product-Card.scss";
import cartDefault from "../assets/cart.png";
import cartEffect from "../assets/cartCheck.png";

export default function ProductBoxComp(props) {
  
  const [product, setProduct] = useState([]);
  const [cartIcon, setCartIcon] = useState(cartDefault);

  const dispatch = useDispatch();

  // function to add to cart
  const addToCart = (e) => {
    // page wont refresh
    e.preventDefault();
    // reducer functions, add calc
    dispatch({ type: "AddToCart", payload: product})

    dispatch({ type: "CalcCart"})
    dispatch({ type: "CalcItems"})
    // change cart icon to added
    setCartIcon(cartEffect)
    
    // revert back to default
    setTimeout(()=> {
      setCartIcon(cartDefault)
    }, 2000)
  }

  // 
  useEffect(() => {
    setProduct(props.product);
  },[]);

  return (
    <>
      <div className="card">
        <div className="prodcut-image">
          {/*like hart symbol*/}
          <span onClick={(e)=> e.target.className="liked"}>&#9829;</span>
          <img src={product.thumbnail} alt=""></img>
        </div>
        <h3 className="prod-title">
          <Link to={`products/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="bg-bottom">
          <div className="product-details">
            <p className="brand">{product.brand}</p>
            <span>&#9733;</span> {product.rating}
          </div>
          <div className="bottom-bar">
            <p className="price">{product.price}</p>
            <img src={cartIcon} alt="" onClick={addToCart}/>
          </div>
        </div>
      </div>
    </>
  );
}
