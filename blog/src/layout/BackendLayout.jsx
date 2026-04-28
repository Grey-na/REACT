import React from 'react'
import { Link } from 'react-router-dom'

function BackendLayout({children}) {
  return (
    <>
    <div className='bg-gray-100'>
      <section className='flex h-screen'>
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4 font-bold text-xl border-b">Dashboard</div>
            <nav className="mt-4">
              <Link to="/admin-category" className="block px-4 py-2 hover:bg-gray-200">Category</Link>
              <Link to="/admin-post" className="block px-4 py-2 hover:bg-gray-200">Post</Link>
              <Link to="/admin" className="block px-4 py-2 text-red-600 font-semibold hover:bg-gray-100">Logout</Link>
            </nav>
        </aside>

          <main className='flex-1 p-6 overflow-y-auto'>
              {children}
          </main>
        </section>
      </div>
    </>
  )
}

export default BackendLayout
