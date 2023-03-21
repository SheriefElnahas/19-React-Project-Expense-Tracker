import styles from './Login.module.css';

import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { login, isPending, error } = useLogin();

  const handleChange = (e) => {
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(loginData.email, loginData.password);
    setLoginData({ email: '', password: '' });
  };
  return (
    <section>


    <form onSubmit={handleSubmit} className={styles.Login}>
      <h2>Login</h2>
      <p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={loginData.email} onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={handleChange} />
      </p>
      <p>
        {!isPending && <button>Login</button>}
        {isPending && <button disabled>Loading</button>}
      </p>
      {error && <p>{error}</p>}
    </form>
    </section>
  );
}

export default Login;
