import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllEvents } from '../../api/Apis'; // Asegúrate de que la ruta sea correcta

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const eventsData = await getAllEvents(token);
        setEvents(eventsData);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    };
    

    fetchEvents();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
  };
  

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.city}, {item.country}</Text>
        )}
      />
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
