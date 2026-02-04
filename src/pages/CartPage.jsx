import React from 'react'
import { useCart } from '../Hooks/useCart'
import ProductCard from '../compnents/Products/ProductCard'

function CartPage() {
  const { cartItems, cartCount,cartTotal } = useCart()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Cart {cartCount > 0 && <span className="text-lg text-gray-500 font-normal">({cartCount} items)</span>}
        </h2>
        <p className="text-2xl font-bold text-indigo-700">Total: ${cartTotal.toFixed(2)}</p>
      </div>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-20 bg-white rounded-2xl shadow-lg">Your cart is empty.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CartPage