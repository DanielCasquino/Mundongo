import React from 'react';
import { Button } from 'react-native';

const LogoutButton = ({ onLogout }) => {
  return <Button title="Cerrar sesión" onPress={onLogout} />;
};

export default LogoutButton;
