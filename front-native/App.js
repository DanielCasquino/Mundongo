import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/Auth/LoginScreen';
import SignUpScreen from './screens/Auth/SignUpScreen';
import HomeScreen from './screens/Home/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token;
      try {
        token = await AsyncStorage.getItem('userToken');
        console.log('Token recuperado:', token);
      } catch (e) {
        console.error('Error al leer el token del almacenamiento:', e);
      }
      setUserToken(token);
      setIsReady(true);
    };
  
    bootstrapAsync();
  }, []);

  if (!isReady) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
