import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect} from 'react'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Registration from './pages/Registration'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Counter from './components/Counter'
import User from './pages/User'
import OrderDetails from './pages/OrderDetails'

const App = () => {

  const [user, setUser] = useState(null)


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout user={user} setUser={setUser}/>,
      children: [
        {
          path: '/',
          element: <Home user={user}/>
        },
        {
          path: '/products',
          element: <ProductDetails />
        },
        {
          path: '/products/:id',
          element: <ProductDetails />
        },
        {
          path: '/login',
          element: <Login user={user} setUser={setUser} />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/registration',

          element: <Registration user={user} setUser={setUser}/>
        },
        {
          path: '/cart',
          element: <Cart />
        },  
        {
          path: '/checkout',
          element: <Checkout />
        },
        {
          path: '/user',
          element: <User />
        },
        {
          path: '/orderdetails/:id',
          element: <OrderDetails />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App