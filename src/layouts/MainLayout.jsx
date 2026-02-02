import React from 'react'
import Navbar from '../compnents/common/Navbar'
import Footer from '../compnents/common/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-white to-pink-50 text-gray-800">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout