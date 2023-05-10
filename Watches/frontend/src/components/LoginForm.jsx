import React from 'react'
import Footer from './Footer.jsx'

const LoginForm = () => {
  return (
    <>
    <div>
      <p>Please Login to Your Account</p>
      <form htmlFor="LoginForm">
        <label htmlFor="email">E-mail*</label>
        <label htmlFor="password">Password*</label>
        <p>Forgot your password?</p>
        <checkbox htmlFor="loggedIn">Plase keep me logged in</checkbox>
      </form>
      <button type="submit" classname="submit-btn">Submit</button>
    </div><Footer />
    </>
  )
}

export default LoginForm