import React, { useEffect, useState } from 'react'
import ProductCard from '../compnents/Products/ProductCard'
import { useCart } from '../Hooks/useCart'

export default function Productpage(){
  const{items,loading}=useCart()

  if(loading){
    return <div>Loading...</div>
  }

  
  return (
    <div>
      <h2>Products</h2>

      {items.map((product)=>{
        return <ProductCard product={product}/>
      })}
    </div>
  )
}

