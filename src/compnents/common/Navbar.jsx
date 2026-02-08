import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Hooks/useCart'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-white tracking-tight">
          Ecommerce
        </h1>
        <div className="flex items-center gap-2 md:gap-6">
          <Link
            to="/"
            className="text-sm md:text-base text-white hover:text-indigo-100 px-3 py-2 rounded-lg transition font-medium hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm md:text-base text-white hover:text-indigo-100 px-3 py-2 rounded-lg transition font-medium hover:bg-white/10"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative text-sm md:text-base text-white hover:text-indigo-100 px-3 py-2 rounded-lg transition flex items-center font-medium hover:bg-white/10"
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-1 bg-white text-indigo-700 text-xs font-bold rounded-full px-2 py-0.5 shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className="text-sm md:text-base text-white hover:text-indigo-100 px-3 py-2 rounded-lg transition font-medium hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar