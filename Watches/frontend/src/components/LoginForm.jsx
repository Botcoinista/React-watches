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
  const [error, setError] = useState('');

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
      setUser(res.data)

    }

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
     <div className="login-row">
    <p>Please Login To Your Account</p>
    <br></br>
          <p>No Account?</p>
          <a href="/registration">Register Here</a>
        </div>
        <br />

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
            id="checkbox"
            checked={keepLoggedIn}
            onChange={handleKeepLoggedInChange}
          />
          Please keep me logged in
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" id="btn-submit">Submit</button>
      </form>
    </div>
  );

export default LoginForm;
