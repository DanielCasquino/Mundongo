import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { createEvent } from '../../api/Apis';

const EventCreationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleCreateEvent = async () => {
    try {
      const token = ''; // Obtener el token guardado
      const eventData = { name, city, country };
      await createEvent(eventData, token);
      navigation.goBack(); // Regresar a la pantalla anterior después de crear el evento
    } catch (error) {
      alert('Error al crear evento: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre del Evento"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Ciudad"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="País"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />
      <Button title="Crear Evento" onPress={handleCreateEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default EventCreationScreen;
