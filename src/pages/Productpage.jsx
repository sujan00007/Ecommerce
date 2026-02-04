import React, { useEffect, useState } from 'react'
import ProductCard from '../compnents/Products/ProductCard'
import { useCart } from '../Hooks/useCart'
import { Link } from 'react-router-dom'

export default function Productpage(){
  const{items,loading}=useCart()

  if(loading){
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-pulse text-xl text-indigo-600 font-semibold">Loading...</div></div>
  }

  
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((product)=>{
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>
    </div>
  )
}

