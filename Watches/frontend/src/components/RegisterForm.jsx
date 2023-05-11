import React, { useState } from 'react';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [streetName, setStreetName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [mobile, setMobile] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ProfileImage, setProfileImage] = useState('');
  const [termsConditions, setTermsConditions] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleStreetNameChange = (e) => {
    setStreetName(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handleTermsConditionsChange = (e) => {
    setTermsConditions(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

    return (
      <div className="registerForm">
        <form onSubmit={handleSubmit}>
          <p>Please Register Your New Account</p>
          <br />

          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />

          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />

          <label htmlFor="streetName">Street Name*</label>
          <input
            type="text"
            id="streetName"
            value={streetName}
            onChange={handleStreetNameChange}
            required
          />

          <label htmlFor="postalCode">Postal Code*</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={handlePostalCodeChange}
            required
          />

          <label htmlFor="city">City*</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            required
          />

          <label htmlFor="mobile">Mobile (optional)</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
          />

          <label htmlFor="company">Company (optional)</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={handleCompanyChange}
          />

          <label htmlFor="email">Email*</label>
          <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          />
          
          <label htmlFor="password">Password*</label>
          <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          />
        
                <label htmlFor="confirmPassword">Confirm Password*</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
        
                <label htmlFor="ProfileImage">Upload Profile Image (optional)</label>
                <input
                  type="file"
                  id="ProfileImage"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
        
                <label>
                  <input
                    type="checkbox"
                    id="termsConditions"
                    checked={termsConditions}
                    onChange={handleTermsConditionsChange}
                  />
                  <span>I have read and accept the terms and agreements</span>
                </label>
        
                <button type="submit" id="btn-submit">Submit</button>
              </form>
            </div>
          );
        }
        
        export default RegisterForm;
        
