import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListTicketScreen = ({ navigation }) => {
  const ticketData = [
    { id: '1', trainNumber: 'T123', departure: 'City A', destination: 'City B', date: '2024-03-15', time: '10:30 AM', seat: 'Car 5, Seat 12' },
    { id: '2', trainNumber: 'T456', departure: 'City C', destination: 'City D', date: '2024-03-16', time: '02:45 PM', seat: 'Car 3, Seat 7' },
    // Add more ticket data as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.ticketItem} onPress={() => navigation.navigate("TicketAbout")}>
      <View style={styles.ticketIcon}>
        <Ionicons name="train-outline" size={30} color="#007AFF" />
      </View>
      <View style={styles.ticketInfo}>
        <Text style={styles.trainNumber}>{item.trainNumber}</Text>
        <Text style={styles.route}>{item.departure} - {item.destination}</Text>
        <Text style={styles.dateTime}>{item.date} | {item.time}</Text>
        <Text style={styles.seatInfo}>{item.seat}</Text>
      </View>
      <View style={styles.ticketActions}>
        <FontAwesome name="eye" size={24} color="#007AFF" style={styles.actionIcon} />
        <FontAwesome name="trash" size={24} color="#FF3B30" style={styles.actionIcon} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vos Billets</Text>
      <FlatList
        data={ticketData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.ticketList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
    marginBottom: 20,
  },
  ticketList: {
    flex: 1,
    flexDirection: "column",
  },
  ticketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  ticketIcon: {
    marginRight: 16,
  },
  ticketInfo: {
    flex: 1,
  },
  trainNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  route: {
    fontSize: 16,
    color: '#333',
  },
  dateTime: {
    fontSize: 14,
    color: '#555',
  },
  seatInfo: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  ticketActions: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginLeft: 16,
  },
});

export default ListTicketScreen;
