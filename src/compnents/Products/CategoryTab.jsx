import React from 'react'

function CategoryTab({categoryName,setSelectedCategory,selectedCategory}) {

    function handleClick(){
        setSelectedCategory(categoryName)
    }
    const isActive = selectedCategory === categoryName
  return (
  <button onClick={handleClick} className={`px-4 py-2 font-medium rounded-lg border-2 transition shadow-sm hover:shadow-md ${
    isActive 
      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600' 
      : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50'
  }`}>
        {categoryName}
    </button>
  )  
}

export default CategoryTab
