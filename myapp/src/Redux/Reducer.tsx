import React from 'react'


const emptyCart = {
    Products: [],
    cartSum: 0,
    cartItems: 0
}

export default function Reducer(state = emptyCart, action: any) {

  switch (action.type) {
    case "AddToCart":
        // add new produc to list
        return {...state, Products: [...state.Products, action.payload]}
    case "RemoveFromCart":
        // return new list without the product clicked
        return {...state, Products: [...state.Products.filter((prod: any)=> prod.id !== action.payload)]}
    case "CalcCart":
        // calc the sum of all products
        const sum = state.Products.reduce((sum: any, prod: any) => {
           return sum + prod.price 
        }, 0)
        return {...state, cartSum: sum};
    case "CalcItems":
        // count number of items koin cart
        return {...state, cartItems: state.Products.length}

        default: return state  
        
    }
}
