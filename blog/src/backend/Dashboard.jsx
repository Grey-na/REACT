import React from 'react'
import BackendLayout from '../layout/BackendLayout'

function Dashboard() {
  return (
    <div>
      <BackendLayout>
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold text-lg mb-2">Manage Categories</h2>
              <p>Add, edit, or delete categories for your news website.</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go to Category</button>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="font-semibold text-lg mb-2">Manage News</h2>
              <p>Publish or manage your latest news articles easily.</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Go to News</button>
            </div>
          </div>
        </div>

      </BackendLayout>
    </div>
  )
}

export default Dashboard
