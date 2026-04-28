import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './frontend/Home'
import Category from './frontend/Category'
import Post from './frontend/Post'
import Login from './backend/Login'
import CategoryAdmin from './backend/CategoryAdmin'
import PostAdmin from './backend/PostAdmin'
import Dashboard from './backend/Dashboard'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:catId' element={<Category/>}/>
        <Route path='/article/:Id' element={<Post/>}/>
        <Route path='/admin/' element={<Login/>}/>
        <Route path='/admin-category/' element={<CategoryAdmin/>}/>
        <Route path='/admin-post/' element={<PostAdmin/>}/>
        <Route path='/dashboard/' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
