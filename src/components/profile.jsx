// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useUser } from '../context/contextsUser';

const Profile = () => {
  const { userName } = useUser(); // Use o gancho personalizado para acessar o contexto

  return (
    <div>
      <h2>Perfil do Usuário</h2>
      <p>Bem-vindo, {userName}!</p>
    </div>
  );
};

export default Profile;
