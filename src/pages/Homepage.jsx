import React from 'react'
import WelcomeBanner from '../compnents/home/WelcomeBanner'
import ProductCard from '../compnents/Products/ProductCard'
import { products } from '../Data/ProductsData'
import PracticeState from '../compnents/common/PracticeState'

function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-8 space-y-8">
      <WelcomeBanner user='Sujan'/>

      <div className="w-full container mx-auto max-w-7xl">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-800 tracking-tight">
          Highlighted Products
        </h1>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product)=>(
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </div>

      <PracticeState/>
    </div>  
  )
}

export default Homepage