// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Api from '../api/Apis'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await Api.login(email, password);
      if (response.token) {
        await AsyncStorage.setItem('userToken', response.token);
        navigation.replace('Home'); 
      } else {
        alert('Error al iniciar sesión');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    
    <View style={styles.container}>
        
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text onPress={() => navigation.navigate('SignUp')}>
          Don't have an account yet? Sign up.
      </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  signUpText: {
    marginTop: 20,
  },
});

export default LoginScreen;
