import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getEventById } from '../../api/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EventDetailsScreen = ({ route }) => {
  const [eventDetails, setEventDetails] = useState(null);
  const { eventId } = route.params;

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const details = await getEventById(eventId, token);
        setEventDetails(details);
      } catch (error) {
        console.error('Error al obtener detalles del evento:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!eventDetails) {
    return (
      <View style={styles.centered}>
        <Text>Cargando detalles del evento...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{eventDetails.name}</Text>
      <Text>{eventDetails.city}, {eventDetails.country}</Text>
      <Text style={styles.description}>{eventDetails.description}</Text>
      {/* Render additional event details here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default EventDetailsScreen;
