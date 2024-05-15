// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar lógica para enviar os dados para o banco de dados
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  };
  
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
            <Link to={"/register"}>Cadastre-se</Link>
          
        </div>
    </div>
  );
};

export default Login;
