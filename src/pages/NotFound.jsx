import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-gray-50 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">404 No Page Found</h1>
      <Link to='/' className="text-sm text-indigo-600 hover:text-indigo-800 transition">Go to Home</Link>
    </div>
  )
}

export default NotFound