import React from 'react'
import Layout from './components/Layout/layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/blog'
import Contact from './components/Contact/contact'
import Error from './components/Error/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
 let Router = createBrowserRouter([{
    path:"", element:<Layout/>, children: [
      {path:"/tailwindnat/" , element:<Home/>},
      {path:"/tailwindnat/home" , element:<Home/>},
      {path:"/tailwindnat/about" , element:<About/>},
      {path:"/tailwindnat/blog" , element:<Blog/>},
      {path:"/tailwindnat/contact" , element:<Contact/>},
      {path:"/tailwindnat/*" , element:<Error/>}
    ]
  }])
  return <RouterProvider router={Router}/>
}


