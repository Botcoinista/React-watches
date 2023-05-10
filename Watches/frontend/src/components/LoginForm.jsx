import React, { useState } from 'react';



function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

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
  };


  return (
    <div className="loginForm">
    <form onSubmit={handleSubmit}>
    <p>Please Login To Your Account</p>
    <br></br>
    

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