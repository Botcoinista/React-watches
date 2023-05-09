import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/products',
          element: <ProductDetails />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App