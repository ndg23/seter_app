import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardComponentProps {
  balance: number;
  currency: string;
  cardNumber: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ balance, currency, cardNumber }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{balance.toFixed(2)}</Text>
        <Text style={styles.subtitle}>Solde actuel</Text>
        <Text style={styles.info}>Devise: {currency}</Text>
        <Text style={[styles.info,{marginLeft:"auto"}]}>Numéro de carte: {cardNumber}</Text>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderTopWidth: 5,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderTopColor: '#8A131F',
    borderRadius: 10,
    width: 370,
    height: 150,
    margin: 2,
    alignSelf: "center"
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#8A131F',
  },
  subtitle: {
    fontSize: 16,
    color: '#8A131F',
  },
  info: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});
