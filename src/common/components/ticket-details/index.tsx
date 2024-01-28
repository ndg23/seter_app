import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const TrainTicketAboutComponent = () => {
  const handleSend = () => {
    // Implement your send functionality here
    console.log('Send button pressed');
  };

  return (
    <View style={styles.ticketContainer}>
      {/* QR Code Image */}
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/220px-Qrcode_wikipedia_fr_v2clean.png' }}
        style={styles.qrCodeImage}
        resizeMode="contain"
      />

      {/* Ticket Details */}
      <View style={styles.ticketDetails}>
        <Text style={styles.title}>Details du ticket</Text>
        <View style={styles.row}>
          <Text style={styles.label}>From:</Text>
          <Text style={styles.value}>City A</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>To:</Text>
          <Text style={styles.value}>City B</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Departure:</Text>
          <Text style={styles.value}>08:00 AM</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>2022-02-28</Text>
        </View>
      </View>

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
      <Entypo name="creative-commons-share" size={24} color="#0ac42c" />

        <Text style={styles.sendButtonText}>Partager</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: '25%',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  qrCodeImage: {
    height: 150, // Adjust the height as needed
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000', // GAFAM-like color
  },
  ticketDetails: {
    backgroundColor: '#ecf0f1', // Light background color
    borderRadius: 8,
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50', // Dark text color
  },
  value: {
    fontSize: 16,
    color: '#2c3e50', // Dark text color
  },
  sendButton: {
    backgroundColor: '#fff', // GAFAM-like color
    padding: 12,
    borderColor:"#ccc",
    borderWidth:1,
    borderRadius: 8,
    flexDirection:"row",
    justifyContent:"center",
    gap:3,
    alignItems: 'center',
    marginTop: "auto",
  },
  sendButtonText: {
    color: '#0ac42c',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TrainTicketAboutComponent;
