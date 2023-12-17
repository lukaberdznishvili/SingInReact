import React, { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const loggedIn = () => {
    setIsLogged(true);
    alert("You are logged in");
  };
  const createdAcc = () =>{
    setIsCreated(true);
    alert("we will add creation Form see you soon")
  }

  const handleInputChange = (identifier, value) => {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    setSubmitted(true);

    // Check if email and password are valid
    const emailNotValid = !enteredEmail.includes('@');
    const passwordNotValid = enteredPassword.trim().length < 6;

    // If both email and password are valid, perform login
    if (!emailNotValid && !passwordNotValid) {
      loggedIn();
    }
  };

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button" onClick={createdAcc}>
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
