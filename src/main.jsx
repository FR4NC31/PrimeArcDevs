import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './pages/home'
import Error from './pages/error'
import About from './pages/about'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  errorElement: <Error />,
  },
  
  {
    path: '/about',
    element: <About />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
