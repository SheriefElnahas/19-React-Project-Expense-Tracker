import styles from './Signup.module.css';

import { useState } from 'react';

function Signup() {
  const [signupData, setSignupData] = useState({ email: '', password: '', displayName: '' });

  const handleChange = (e) => {
    setSignupData((prevSignupData) => {
      return {
        ...prevSignupData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData.email, signupData.password, signupData.displayName);

    setSignupData({ email: '', password: '', displayName: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Signup}>
      <h2>Signup</h2>
      <p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={signupData.email} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={signupData.password} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="name">Display Name:</label>
        <input type="name" id="name" name="displayName" value={signupData.displayName} onChange={handleChange} />
      </p>
      <p>
        <button>Signup</button>
      </p>
    </form>
  );
}

export default Signup;
