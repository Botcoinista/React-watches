import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <>
      <Navbar />
        {/* Outlet = All content inside App/RootLayout */}
      <Outlet />
      <Footer />

    </>
  )
}

export default RootLayout