import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 border-t border-indigo-700 text-center py-8 text-sm text-white mt-auto shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <p className="font-medium tracking-wide">&copy; {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer