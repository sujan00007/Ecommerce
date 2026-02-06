import React from 'react'

function ProductRange({setMinValue,setMaxValue}) {

    function setMin(event){
        setMinValue(Number(event.target.value) || 0)


    }
    function setMax(event){
        setMaxValue(Number(event.target.value) || 1000)

    }
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-white to-gray-50 px-5 py-2.5 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-lg transition">
      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Price:</span>
      <input 
        type='number' 
        placeholder="Min" 
        onChange={setMin} 
        className="w-24 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"
      />
      <span className="text-gray-400 font-bold">-</span>
      <input 
        type='number' 
        placeholder="Max" 
        onChange={setMax} 
        className="w-24 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition"
      />
    </div>
  )
}

export default ProductRange
