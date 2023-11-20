// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Api from '../api/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const token = await AsyncStorage.getItem('userToken');
      const eventsData = await Api.getAllEvents(token);
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  const renderEvent = ({ item }) => (
    <TouchableOpacity style={styles.eventItem}>
      <Text style={styles.eventName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleLogout = async () => {
    Alert.alert(
      "Cerrar Sesión",
      "¿Estás seguro de que quieres cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Cerrar Sesión", onPress: async () => {
            await AsyncStorage.removeItem('userToken');
            setIsAuthenticated(false);
            navigation.navigate('Login');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Crear Evento"
        onPress={() => navigation.navigate('CreateEvent')}
      />
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  eventItem: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
