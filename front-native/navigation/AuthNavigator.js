import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccessScreen from '../screens/AccessScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Access" component={AccessScreen} />
      <Stack.Screen name="Discover" component={DiscoverScreen} />
    </Stack.Navigator>
  );
}
