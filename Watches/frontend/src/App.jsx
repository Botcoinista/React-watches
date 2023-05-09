import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import Login from './pages/Login'

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
        },
        {
          path: '/login',
          element: <Login />

        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App