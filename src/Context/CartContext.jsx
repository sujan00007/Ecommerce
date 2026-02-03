import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

export const CartContext = createContext();

function CartProvider({ children }) {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  //step1 initialize cart items from local storage on component creation
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })
  //step 2: add item to cart and save to local storage

  function addToCart(product) {
    const exists = cartItems.find((item) => item.id === product.id)
    if (exists) return
    const updatedCart = [...cartItems, product]

    setCartItems(updatedCart)

    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
  }
  // Add this function before the return statement
  function isInCart(productId) {
    return cartItems.some(item => item.id === productId);
  }

  function removeFromCart(productId) {
    //step 1
    const currentItems = cartItems
    //step2
    const updatedItems = currentItems.filter
      ((item) => {
        return item.id !== productId
      })
    //step3
    setCartItems(updatedItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
  }
  const cartCount = cartItems.length
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
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <CartContext.Provider value={{ items, addToCart, cartCount, isInCart, removeFromCart, loading, cartItems, cartTotal }}> {children}</CartContext.Provider>
  )
}

export default CartProvider
