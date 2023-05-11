import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({ user, setUser }) => {
  return (
    <>
      <LoginForm user={user} setUser={setUser}/>
    </>
  )
}

export default Login