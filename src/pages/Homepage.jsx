import React from 'react'
import WelcomeBanner from '../compnents/home/WelcomeBanner'
import ProductCard from '../compnents/Products/ProductCard'
import { products } from '../Data/ProductsData'

function Homepage() {
  return (
    <div>
      <WelcomeBanner user='Sujan'/>

      <div>
        <h1>Highlighted Products</h1>

        <div>
            {products.map((product)=>(
              <ProductCard
                key={product.id}
                product={product}  
                />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage
