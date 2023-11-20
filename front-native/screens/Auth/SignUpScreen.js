import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUp } from '../../api/Apis'; // Asegúrate de que la ruta sea correcta

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await signUp(email, password, displayName);
      await AsyncStorage.setItem('userToken', response.token);
      // Navegar al Home después del registro
      navigation.replace('Home');
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre de usuario"
        value={displayName}
        onChangeText={setDisplayName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Registrarse" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SignUpScreen;
