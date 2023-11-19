// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import * as Api from '../api/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        const fetchedEvents = await Api.getEvents(userToken); 
        setEvents(fetchedEvents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  const renderEvent = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.eventItem}
        onPress={() => navigation.navigate('EventDetails', { eventId: item.id })} 
      >
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventInfo}>{`${item.city}, ${item.country}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  eventItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    elevation: 2, 
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventInfo: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
