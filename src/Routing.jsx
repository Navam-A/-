import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, redirect } from 'react-router-dom'
import HomePage from "./Components/HomePage"
import BooksPage from "./Components/BooksPage"
import BlogPage from "./Components/BlogPage"
import NewsPage from "./Components/NewsPage"
import Dashboard from './Admin/Dashboard'
import ViewPageTemplate from "./Admin/ViewPageTemplate"

export default function Routing() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='books' element={<BooksPage />}/>
        <Route path='/viewPage/:id' element={<ViewPageTemplate />}/>
        <Route path='blogs' element={<BlogPage />}/>
        <Route path='news' element={<NewsPage />}/>
        <Route path='admindashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}
     