import React from 'react'
import Navbar from '../compnents/common/Navbar'
import Footer from '../compnents/common/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout