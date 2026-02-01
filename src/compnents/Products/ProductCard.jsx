import React from 'react'
import { useCart } from '../../Hooks/useCart'

function ProductCard({ product }) {
    const{addToCart}=useCart();

 
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-sm overflow-hidden p-3 flex flex-col gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
      <p className="text-sm font-semibold text-indigo-600">{product.price}</p>
      <button onClick={()=> addToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard