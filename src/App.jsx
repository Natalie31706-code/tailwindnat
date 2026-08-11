import React from 'react'
import Layout from './components/Layout/layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/blog'
import Contact from './components/Contact/contact'
import Error from './components/Error/Error'
import { createHashRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  let Router = createHashRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'blog', element: <Blog /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Error /> }
      ]
    }
  ])

  return <RouterProvider router={Router} />
}