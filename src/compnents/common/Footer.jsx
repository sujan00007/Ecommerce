import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-50 via-white to-pink-50 border-t border-gray-200 text-center py-4 text-xs text-gray-500 mt-8">
      &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
    </footer>
  )
}

export default Footer