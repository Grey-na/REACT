import React from 'react'
import { Link } from 'react-router-dom'
import { SportsCategory } from '../Data'

function FrontendLayout({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* TOP HEADER: Logo and Main Site Links */}
        <header className="bg-white shadow">
          <div className="container mx-auto flex justify-between items-center p-4">
            <Link to="/" className="text-xl font-bold text-blue-700">News Portal</Link>
            <nav className="space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600">Contact</Link>
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-semibold">Login</Link>
            </nav>
          </div>
        </header>

        {/* CATEGORY NAV: Dynamic links from Data.jsx */}
        <nav className="bg-blue-600 py-2 sticky top-0 z-10">
          <div className="container mx-auto flex space-x-4 overflow-x-auto px-4">
            <Link to="/" className="text-white font-semibold px-3 py-1 hover:bg-blue-700 rounded">
              All
            </Link>
            
            {SportsCategory.map((cat, index) => (
              <Link 
                key={index} 
                to={`/category/${cat}`} 
                className="text-white font-semibold px-3 py-1 hover:bg-blue-700 rounded capitalize whitespace-nowrap"
              >
                {cat}
              </Link>
            ))}
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-white mt-8 py-4 border-t">
          <div className="container mx-auto text-center text-sm text-gray-600">
            © 2026 News Portal. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  )
}

export default FrontendLayout