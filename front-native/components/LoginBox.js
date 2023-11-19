// components/LoginBox.js
import React from 'react';
import AuthForm from './AuthForm';

const LoginBox = ({ onLogin }) => {
  return <AuthForm onAuth={onLogin} isSignUp={false} />;
};

export default LoginBox;
