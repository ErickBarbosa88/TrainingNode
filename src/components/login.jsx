// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from '../context/contextsUser';
import ThreeBackground from "./ThreeBackground.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUserName } = useUser();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://nodeandexpress-nz44.onrender.com/user/login", {
        email,
        password,
      });
      const token = response.data.token;

      localStorage.setItem("token", token);
      console.log(token);
      navigate("/profile");
      console.log(response.data)
      setUserName(response.data.user.name);
    } catch (error) {
      setError(error.response.data.message);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <ThreeBackground/>
      <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '20px', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
        <h2>Login</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', background: '#00ff00', color: 'black', fontWeight: 'bold' }}>Login</button>
        </form>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <Link to="/register" style={{ color: 'white', textDecoration: 'underline' }}>Cadastre-se</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
