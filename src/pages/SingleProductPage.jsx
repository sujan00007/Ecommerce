import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProductPage() {

    const params=useParams()
    const [item,setItem]=useState({})
    const [loading,setLoading]=useState(true)
    console.log(params)

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`)
            const data = await response.json()
            setItem(data)
            setLoading(false)
          } catch (error) {
            console.error("Error fetching products:", error)
            setLoading(false)
          }
        }
    
        fetchProducts()
      }, [])
      console.log("item",item)
      console.log("loading",loading)

      if(loading){
        return <div className="flex items-center justify-center min-h-screen"><div className="animate-pulse text-xl text-indigo-600 font-semibold">Loading...</div></div>
      }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                        <img src={item.image} height={400} width={400} className="max-h-96 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-sm font-medium text-indigo-600 uppercase tracking-wide mb-2">{item.category}</p>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{item.title}</h1>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                                    <span className="text-yellow-600 font-bold mr-1">★</span>
                                    <span className="text-sm font-semibold text-gray-900">{item.rating.rate}</span>
                                </div>
                                <span className="text-sm text-gray-500">({item.rating.count} reviews)</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                        </div>
                        <div className="border-t pt-6">
                            <p className="text-4xl font-bold text-indigo-700">${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProductPage
