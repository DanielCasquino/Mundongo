// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
// Importa otras pantallas aquí si es necesario

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CreateEvent" component={CreateEventScreen} />
      {/* Asegúrate de que las otras pantallas también estén registradas aquí */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
