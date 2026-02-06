import React from 'react'

function SearchProduct({setSearch}) {
    function onType(event){
        setSearch(event.target.value)

    }

    function onSubmit(e){
        e.preventDefault()
    }
  return (
    <form onSubmit={onSubmit} className="flex-1 max-w-md">
        <input 
          type='text' 
          placeholder="Search products..." 
          onChange={onType}
          className="w-full px-4 py-2.5 text-sm border-2 border-gray-300 rounded-lg bg-white focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition shadow-md hover:shadow-lg"
        />
    </form>
  )
}

export default SearchProduct
