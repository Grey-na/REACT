import React from 'react'
import FrontendLayout from '../layout/FrontendLayout'
import { sportsData } from '../Data' // 1. Import the data

function Home() {
  return (
    <div>
      <FrontendLayout>
        <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 2. Map through the data */}
          {sportsData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{item.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <a href={`/article/${item.id}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Read More</a>
              </div>
            </div>
          ))}
        </main>
      </FrontendLayout>
    </div>
  )
}

export default Home