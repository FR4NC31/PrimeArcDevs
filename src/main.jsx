import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './pages/home'
import Error from './pages/error'
import About from './pages/about'
import Services from './pages/services'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'



const router = createBrowserRouter([
  {
  path: '/',
  element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/*',
    element: <Error />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
