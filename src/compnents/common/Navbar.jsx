import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Hooks/useCart'

function Navbar() {
  const { cartCount } = useCart()

  const linkBase = 'text-sm md:text-base text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 px-2 py-1 rounded transition'
  const spaced = 'ml-4'

  return (
    <nav className="bg-white/60 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <h1 className="flex-1 text-lg md:text-xl font-semibold text-gray-800">Ecommerce</h1>

        <Link to="/" className={linkBase}>
          Home
        </Link>

        <Link to="/products" className={`${spaced} ${linkBase}`}>
          Products
        </Link>

        <Link to="/cart" className={`${spaced} ${linkBase} inline-flex items-center`}>
          Cart {cartCount}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar