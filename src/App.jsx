import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import CartProvider from './Context/CartContext'
import CartPage from './pages/CartPage'
import Productpage from './pages/Productpage'

function App() {
  return (
    <CartProvider>
    <Routes>
      <Route path='/' element={<MainLayout/>}>

        <Route index element={<Homepage/>}/>
          <Route path="products" element={<Productpage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          


      </Route>
      <Route path='*'element={<NotFound/>} />
      
    </Routes>
    </CartProvider>

)
}

export default App
