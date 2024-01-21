import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const BuyTravelComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réserver un Voyage en Train</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Gare de départ" />
        <TextInput style={styles.input} placeholder="Gare d'arrivée" />
        <TextInput style={styles.input} placeholder="Date du voyage" />
        <TextInput style={styles.input} placeholder="Nombre de billets" keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Réserver')}>
        <Text style={styles.buttonText}>Réserver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BuyTravelComponent;
