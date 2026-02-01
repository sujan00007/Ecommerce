import React from 'react'
import { useCart } from '../Hooks/useCart'
import ProductCard from '../compnents/Products/ProductCard'

function CartPage() {
    const {items,cartCount} = useCart()

    console.log("items in cart",items)


  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product)=>(
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </div>
  )
}

export default CartPage