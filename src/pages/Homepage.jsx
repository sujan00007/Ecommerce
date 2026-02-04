import React from 'react'
import WelcomeBanner from '../compnents/home/WelcomeBanner'
import ProductCard from '../compnents/Products/ProductCard'
import { products } from '../Data/ProductsData'
import PracticeState from '../compnents/common/PracticeState'

function Homepage() {
  return (
    <div className="space-y-12">
      <WelcomeBanner user="Sujan" />

      <section className="w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
          Highlighted Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="flex justify-center pt-4">
        <PracticeState />
      </div>
    </div>
  )
}

export default Homepage