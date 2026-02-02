import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Hooks/useCart'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="bg-white/70 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-indigo-700 tracking-tight">
          Ecommerce
        </h1>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="text-sm md:text-base text-indigo-600 hover:text-indigo-800 px-2 py-1 rounded transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm md:text-base text-indigo-600 hover:text-indigo-800 px-2 py-1 rounded transition"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative text-sm md:text-base text-indigo-600 hover:text-indigo-800 px-2 py-1 rounded transition flex items-center"
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-1 bg-indigo-600 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar