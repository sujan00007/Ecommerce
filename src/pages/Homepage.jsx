import React from 'react'
import WelcomeBanner from '../compnents/home/WelcomeBanner'
import ProductCard from '../compnents/Products/ProductCard'
import { products } from '../Data/ProductsData'
import PracticeState from '../compnents/common/PracticeState'

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-4 py-8 md:px-10 space-y-10">
      <WelcomeBanner user="Sujan" />

      <section className="w-full max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 tracking-tight">
          Highlighted Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="flex justify-center">
        <PracticeState />
      </div>
    </div>
  )
}

export default Homepage