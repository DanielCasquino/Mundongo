import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access Screen</Text>
      <Button title="Go to Discover" onPress={() => navigation.navigate('Discover')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
