import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({ user, setUser }) => {
  return (
    <>
    <h1>hej</h1>
      <LoginForm user={user} setUser={setUser}/>
    </>
  )
}

export default Login