import React from 'react'
import { useParams } from 'react-router-dom'
import FrontendLayout from '../layout/FrontendLayout'
import { sportsData } from '../Data' // Import your data

function Category() {
  // 1. Get the category name from the URL (e.g., "football")
  const { catId } = useParams();

  // 2. Filter the data to show only items matching this category
  const filteredData = sportsData.filter((item) => item.category === catId);

  return (
    <div>
      <FrontendLayout>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-6 capitalize">{catId} News</h1>
          
          {filteredData.length > 0 ? (
            <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredData.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-48 object-cover rounded-t-lg" 
                  />
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-2">{item.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                    <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </main>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-xl">No articles found in this category.</p>
            </div>
          )}
        </div>
      </FrontendLayout>
    </div>
  )
}

export default Category