// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import ThreeBackground from './ThreeBackground';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://nodeandexpress-nz44.onrender.com/user', {
        name: name,
        email: email,
        password: password
      });

      setEmail("");
      setName("");
      setPassword("");
      setAlertMessage('Novo usuário cadastrado: ' + JSON.stringify(response.data));
      setAlertOpen(true); 
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <div>
      <ThreeBackground />
      <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '20px', background: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', maxWidth: '400px', margin: 'auto', marginTop: '100px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Nome:
              <input type="text" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', background: '#00ff00', color: 'black', fontWeight: 'bold' }}>Cadastrar</button>
        </form>
        {alertOpen && (
          <Alert severity="success" onClose={handleCloseAlert} style={{ marginTop: '10px' }}>
            {alertMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Register;
