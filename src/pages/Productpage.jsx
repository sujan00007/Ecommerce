import React, { useEffect, useState } from 'react'
import ProductCard from '../compnents/Products/ProductCard'
import { useCart } from '../Hooks/useCart'
import { Link } from 'react-router-dom'
import categoryData from '../Data/Categories'
import CategoryTab from '../compnents/Products/CategoryTab'
import SearchProduct from '../compnents/Products/SearchProduct'

export default function Productpage(){
  const{items,loading}=useCart()
  const [selectedCategory,setSelectedCategory]=useState("all")
  const [search,setSearch]=useState("")
  console.log("search",search)

  console.log("selected category",selectedCategory)
  
  
  const filterItems=selectedCategory==="all" ? items : items.filter((product)=>product.category===selectedCategory)
  console.log("filtered item",filterItems)

  if(loading){
    return <div className="flex items-center justify-center min-h-screen"><div className="animate-pulse text-xl text-indigo-600 font-semibold">Loading...</div></div>
  }

  
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">Products</h2>
      

      <div className="flex flex-wrap gap-3 mb-8">
        <CategoryTab
          categoryName="all" 
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          key="all"
        />
        <SearchProduct setSearch={setSearch}/>
        {
          categoryData.map((category)=>{
            return (
              <CategoryTab
                categoryName={category} 
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                key={category}

              />
            )
          })
        }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterItems.map((product)=>{
          return <ProductCard key={product.id} product={product}/>
        })}
      </div>
    </div>
  )
}

  