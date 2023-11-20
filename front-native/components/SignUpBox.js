// components/SignUpBox.js
import React from 'react';
import AuthForm from './AuthForm';

const SignUpBox = ({ onSignUp }) => {
  return <AuthForm onAuth={onSignUp} isSignUp={true} />;
};

export default SignUpBox;
