import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ItemTravelComponentProps {
  trainName: string;
  departureTime: string;
  arrivalTime: string;
  platformNumber: string;
}

const ItemTravelComponent: React.FC<ItemTravelComponentProps> = ({
  trainName,
  departureTime,
  arrivalTime,
  platformNumber,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trainName}>{trainName}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.timeText}>Départ: {departureTime}</Text>
        <Text style={styles.timeText}>Arrivée: {arrivalTime}</Text>
      </View>
      <Text style={styles.platformText}>Voie: {platformNumber}</Text>
    </View>
  );
};

export default ItemTravelComponent;

const styles = StyleSheet.create({
  container: {
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderRadius: 15,
  },
  trainName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498db',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 16,
    color: '#555',
  },
  platformText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});
