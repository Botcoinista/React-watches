import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import UseForms from '../hooks/UseForms'

function RegisterForm({ user, setUser}) {

  const navigate = useNavigate()

  const [termsConditions, setTermsConditions] = useState(false);

  const [error, setError] = useState(null)

  useEffect(() => {console.log(termsConditions)}, [termsConditions])
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetName: '',
    postalCode: '',
    city: '',
    mobile: '',
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: ''
  })

  const { handleChange } = UseForms(formData, setFormData)

    //Toggle value of checkbox
    const handleTermsConditionsChange = () => {   
      setTermsConditions(state => !state)
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)

    if(termsConditions == false) {
      console.log('You have to accept terms and conditions.')
      setError('You have to accept terms and conditions.')
      return
    }

    if(password.value !== confirmPassword.value) {
      console.log('Passwords does not match.')
      setError('Passwords does not match.')
      return
    }

    try {
      const res = await axios.post('http://localhost:8080/api/users/register', formData)
  
  
      if(res.data) {
        setUser(res.data)
      }
  
            localStorage.setItem('token', res.data.token)
  
      setFormData({
        firstName: '',
        lastName: '',
        streetName: '',
        postalCode: '',
        city: '',
        mobile: '',
        company: '',
        email: '',
        password: '',
        confirmPassword: '',
        profileImage: ''
      })
      navigate('/')

    } catch (err) {
      console.log(err)

      if(err.response.status == 409) {
        console.log('User allready exists')
        setError('User allready exists')
      }
    }

  };

  useEffect(() => {
    console.log(user)
  }, [user])



    return (
      <div className="registerForm">
        <form onSubmit={handleSubmit}>
        <p>Please Register Your New Account</p>
          <br />

          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="streetName">Street Name*</label>
          <input
            type="text"
            id="streetName"
            name="streetName"
            value={formData.streetName}
            onChange={handleChange}
            required
          />

          <label htmlFor="postalCode">Postal Code*</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />

          <label htmlFor="city">City*</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label htmlFor="mobile">Mobile (optional)</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />

          <label htmlFor="company">Company (optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

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
        
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label htmlFor="profileImage">Profile Image (optional)</label>
          <input
            type="text"
            id="profileImage"
            name="profileImage"
            value={formData.profileImage}
            onChange={handleChange}
          />
  
          <div className="row">
            <label></label>
              <input
                type="checkbox"
                id="termsConditions"
                name="termsConditions"
                checked={termsConditions}
                onChange={handleTermsConditionsChange}
              />
              <span>I have read and accept the terms and agreements</span>

          </div>
          <p className='error'>{error}</p>
          
  
          <button type="submit" id="btn-submit">Submit</button>
              </form>
            </div>
          );
        }
        
        export default RegisterForm;
        
