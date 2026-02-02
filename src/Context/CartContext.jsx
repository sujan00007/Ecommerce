import React, { useEffect } from 'react'
import { createContext,useContext,useState} from 'react'

export const CartContext=createContext();

function CartProvider({children}) {

    const [items,setItems]=useState([])
    const[loading,setLoading]=useState(true)

    function addToCart(product){
      const exists=items.find((item)=>item.id===product.id)
      if(exists) return
        setItems(prev=>[...prev,product])
    }

    function isInCart(productId){
      return items.some((item)=>item.id===productId)
    }
    function removeFromCart(productId){
    //step 1
    const currentItems=items
    //step2
    const updatedItems=currentItems.filter
    ((item)=>{
      return item.id !==productId
    })
    //step3
    setItems(updatedItems)
    }
    const cartCount=items.length
    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setItems(data)
            setLoading(false)
          } catch (error) {
            console.error("Error fetching products:", error)
            setLoading(false)
          }
        }
    
        fetchProducts()
      }, [])
  return (
   <CartContext.Provider value={{items,addToCart,cartCount,isInCart,removeFromCart,loading}}> {children}</CartContext.Provider>
  )
}

export default CartProvider
