import React from 'react'

function SearchProduct({setSearch}) {
    function onType(event){
        setSearch(event.target.value)

    }
  return (
    <form>
        <input type='text' placeholder="Enter Product Name" onChange={onType}/>

    </form>
  )
}

export default SearchProduct
