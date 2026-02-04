import React from 'react'
import { useCart } from '../../Hooks/useCart'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const { addToCart, isInCart, removeFromCart } = useCart()
  const isCart = isInCart(product.id)

  return (
    <Link to= {`/products/${product.id}`}   className="max-w-xs bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col gap-4 transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain mb-2 rounded"
      />
      <h3 className="text-base font-semibold text-gray-900 truncate">{product.name}</h3>
      <p className="text-sm font-bold text-indigo-700 mb-2">${product.price}</p>
      {isCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          className="w-full py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition"
        >
          Remove From Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="w-full py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      )}
    </Link>
  )
}

export default ProductCard