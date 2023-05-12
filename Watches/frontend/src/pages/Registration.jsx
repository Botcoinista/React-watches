import React from 'react'
import RegisterForm from '../components/RegisterForm'

const Registration = ({ user, setUser}) => {
  return (
    <>
    <RegisterForm user={user} setUser={setUser}/>
    </>
  )
}

export default Registration
