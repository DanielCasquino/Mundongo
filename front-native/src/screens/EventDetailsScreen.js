import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { getEventById } from '../../api/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EventDetailsScreen = ({ route }) => {
  const [event, setEvent] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const eventData = await getEventById(id, token);
          setEvent(eventData);
        } else {
          Alert.alert('Error', 'Token no disponible');
        }
      } catch (error) {
        console.error('Error al obtener detalles del evento:', error);
        Alert.alert('Error', 'No se pudo obtener información del evento');
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={{ uri: event.imageUrl || 'https://picsum.photos/1920/1080' }} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.eventName}>{event.name}</Text>
          <Text style={styles.eventDate}>Fecha: {event.date}</Text>
          <Text style={styles.eventLocation}>Lugar: {event.location}</Text>
          <Text style={styles.eventDescription}>Descripción: {event.description}</Text>
          {/* Se pueden agregar mas vainas aca */}
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%', 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
    width: '100%',
  },
  eventName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  eventDate: {
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  eventLocation: {
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
  },
});

export default EventDetailsScreen;
