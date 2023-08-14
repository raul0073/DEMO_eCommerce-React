import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";

export default function ProductRowForCart(props) {
    const product = props.product
    const dispatch = useDispatch();


    const delProduct = (e) => {
      e.preventDefault();

      dispatch({ type: "RemoveFromCart", payload: product.id });
      dispatch({ type: "CalcCart"})
      dispatch({ type: "CalcItems"})  
    };

  return (
    <>
      <section className="cartGrid" >
        <button onClick={delProduct} id={product.id}>X</button>
        <div className="img">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="name">
            <p>{product.title}</p><br/>
            <p style={ {"color": "red", "fontSize": "1rem"}}>{product.discountPercentage}% OFF</p>
        </div>
        <div className="stock">
          <p>IN STOCK</p>
        </div>
        <div className="qty">
            <input type="number" defaultValue={1}/>
        </div>
        <div className='price'>
            <p><strong>{product.price}</strong></p>
        </div>
      </section>
    </>
  );
}
