import React from 'react'
import BackendLayout from '../Layout/BackendLayout'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

function PostAdmin() {
  let {register, handleSubmit}=useForm()
     let onSubmit=(data)=>{
      toast.success("News Added Successfully!!")
      console.log(data)
    }
  return (
  <BackendLayout>
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="  mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">Add News</h1>
        {/* News Add Form */}
        <form className="space-y-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input type="text" {...register("title")} placeholder="News Title" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea {...register("Description")} placeholder="News Description" className="w-full border rounded px-4 py-2 h-24 focus:outline-none focus:ring focus:border-blue-400" defaultValue={""} />
          </div>
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select {...register("selectNews")} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400">
              <option>Select Category</option>
              <option>Sports</option>
              <option>Technology</option>
              <option>Entertainment</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Upload Image</label>
            <input type="file" {...register("image")} className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add News
          </button>
        </form>
        {/* News List Table */}
        <h2 className="text-xl font-bold mb-4">News List</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Image</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr>
                <td className="px-4 py-2 border">Example News Title</td>
                <td className="px-4 py-2 border">Sports</td>
                <td className="px-4 py-2 border">
                  <img src="https://via.placeholder.com/50" alt="News Image" className="w-12 h-12 object-cover rounded" />
                </td>
                <td className="px-4 py-2 border">
                  <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mr-2">Edit</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
              {/* Add dynamic rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <ToastContainer/>
  </BackendLayout> 
  )
}

export default PostAdmin