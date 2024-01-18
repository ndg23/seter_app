import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CardComponent = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>19.500</Text>
        <Text style={styles.subtitle}>Sous-titre</Text>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', // Nouvelle couleur
    borderTopWidth: 5, // Largeur de la bordure supérieure
    borderTopEndRadius:10,
    borderTopLeftRadius:10,
    borderTopColor: '#8A131F', // Couleur de la bordure supérieure
    borderRadius: 10,
    width: 370,
    height: 150,
    margin: 2,
    alignSelf:"center"
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#8A131F', // Texte en blanc pour contraster avec la nouvelle couleur de fond
  },
  subtitle: {
    fontSize: 16,
    color: '#8A131F', // Texte en blanc pour contraster avec la nouvelle couleur de fond
  },
});
