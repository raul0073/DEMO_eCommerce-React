import React from 'react'
import { useSelector } from 'react-redux'
import ProductRowForCart from '../Components/ProductRowForCart'

export default function CartComp() {

  const products = useSelector(state => state.Products)
  const cartItems = useSelector(state => state.cartItems)
  const cartSum = useSelector(state => state.cartSum)

    return (
    <>
    <main className='cart-container'>
    <h2>Your Cart</h2>
    {products.map(product => (
    <ProductRowForCart product={product} key={product.id}/>
    ))}

    
    <footer>
    <p><small>Total items: {cartItems}</small></p><br/>
        Total price: $ {cartSum.toFixed(2)}
    </footer>
      </main>
    </>
  )
}
