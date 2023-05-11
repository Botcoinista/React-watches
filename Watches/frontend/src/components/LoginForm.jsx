import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeepLoggedInChange = (e) => {
    setKeepLoggedIn(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Perform form submission
    // Make an API request to authenticate the user

    
    setEmail('');
    setPassword('');
    setKeepLoggedIn(false);
    setError('');
  };

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <div className="login-row">
          <p>Please Login To Your Account</p>
          <p>No Account?</p>
          <a href="/registration">Register Here</a>
        </div>
        <br />

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
}

export default LoginForm;
