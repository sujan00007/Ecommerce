import React, { useEffect, useState } from 'react'
import ProductCard from '../compnents/Products/ProductCard'
import { useCart } from '../Hooks/useCart'
import { Link } from 'react-router-dom'
import categoryData from '../Data/Categories'
import CategoryTab from '../compnents/Products/CategoryTab'
import SearchProduct from '../compnents/Products/SearchProduct'
import ProductRange from '../compnents/Products/ProductRange'
import FilterByRating from '../compnents/Products/FilterByRating'

export default function Productpage(){
  const{items,loading}=useCart()
  const [selectedCategory,setSelectedCategory]=useState("all")
  const [search,setSearch]=useState("")
  const[minValue,setMinValue]=useState(0)
  const [maxValue,setMaxValue]=useState(1000)

  const[minRating,setMinRating]=useState(0)
  const[maxRating,setMaxRating]=useState(5)

  console.log("search",search)
  console.log("MinRating",minRating)
  console.log("MaxRating",maxRating)

  console.log("selected category",selectedCategory)
  
  
  let filterItems=selectedCategory==="all" ? items : items.filter((product)=>product.category===selectedCategory)
  console.log("filtered item",filterItems)

  function filterBySearch(items){
    if(!search){
      return items
    }
    return items.filter((product)=>{
      return product.title.toLowerCase().includes(search.toLowerCase())
    })

  }
  filterItems=filterBySearch(filterItems)

  function productRangeFilter(){
    return filterItems.filter((product)=>{
      return product.price>=minValue && product.price<=maxValue
    })
  }
  function productRatingFilter(){
    return filterItems.filter((item)=>{
      return item.rating.rate>=minRating && item.rating.rate<=maxRating
    })
  }
  filterItems=productRangeFilter(filterItems)
  filterItems=productRatingFilter(filterItems)

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
        <ProductRange setMaxValue={setMaxValue} setMinValue={setMinValue}/>
        <FilterByRating setMinRate={setMinRating}
        setMaxRate={setMaxRating}
        />
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

  