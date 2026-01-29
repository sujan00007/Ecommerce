import React from 'react'
import Navbar from '../compnents/common/Navbar'
import Footer from '../compnents/common/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
    
  )
}

export default MainLayout
