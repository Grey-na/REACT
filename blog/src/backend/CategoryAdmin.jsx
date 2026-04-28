import React from 'react'
import BackendLayout from '../layout/BackendLayout'
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

function CategoryAdmin() {
  let {register, handleSubmit} = useForm();
  let onSubmit = (data) => {
    toast.success("Category Added Successfully!!")
    console.log(data);
  };
  return (
    <div>
      <BackendLayout>
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="  bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">Add New Category</h1>
            {/* Category Input Form */}
            <form className="flex gap-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
              <input {...register("Add")} type="text" placeholder="Enter Category Name" className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400" />
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add</button>
            </form>
            {/* Category Table */}
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 border">S.No</th>
                    <th className="px-4 py-2 border">Category Name</th>
                    <th className="px-4 py-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Row 1 */}
                  <tr>
                    <td className="px-4 py-2 border">1</td>
                    <td className="px-4 py-2 border">Sports</td>
                    <td className="px-4 py-2 border">
                      <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 mr-2">Edit</button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                    </td>
                  </tr>
                  {/* Example Row 2 */}
                  <tr>
                    <td className="px-4 py-2 border">2</td>
                    <td className="px-4 py-2 border">Technology</td>
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
    </div>
  )
}

export default CategoryAdmin
