import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">404</h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-900">Page Not Found</p>
        <p className="text-base text-gray-600 max-w-md mx-auto">The page you're looking for doesn't exist or has been moved.</p>
      </div>
      <Link to='/' className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition">Go to Home</Link>
    </div>
  )
}

export default NotFound