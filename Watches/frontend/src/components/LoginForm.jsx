import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function LoginForm({ user, setUser}) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleChange = (e) => {
    e.preventDefault()

    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })       
}

  const handleKeepLoggedInChange = (e) => {
    setKeepLoggedIn(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(formData.email == '' || formData.password == '') {
      return
    }
    const res = await axios.post('http://localhost:8080/api/users/login', formData)
    console.log(res)
    if(res.data) {
      //Setting user to the data stored in the MongoDB
      setUser(res.data)
      //Resets the login-form
      setFormData({
        email: '',
        password: ''
      })
      navigate('/')
    }
  };


  //Logging user when updated.
  useEffect(() => {
    console.log(user)
  }, [user])


  return (
    <div className="loginForm">
    <form onSubmit={handleSubmit}>
    <p>Please Login To Your Account</p>
    <br></br>
    

    <label htmlFor="email">Email*</label>
    
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
    />

<label htmlFor="password">Password*</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label>
        <input
          type="checkbox"
          id="checkbox-grey"
          checked={keepLoggedIn}
          onChange={handleKeepLoggedInChange}
        />
        <p>Please keep me logged in</p>
      </label>

      <button type="submit" id="btn-submit">Submit</button>
    </form>
    </div>
  );
}

export default LoginForm