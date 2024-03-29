import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CardComponentProps {
  balance: number;
  currency: string;
  cardNumber: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ balance, currency, cardNumber }) => {
  const navigation=useNavigation()
  const handleScanQRCode = () => {
    // Add logic for handling QR code scanning
    console.log('Scanning QR Code...');
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{balance.toFixed(2)}</Text>
        {/* <Text style={styles.subtitle}>Solde actuel</Text> */}
        {/* <Text style={styles.info}>Devise: {currency}</Text> */}
        <Text style={[styles.info, { marginLeft: 'auto' ,marginTop:"auto"}]}>ID:123SN45 {cardNumber}</Text>

        {/* Scan QR Code Button */}
        <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate("Scan")}>
          <MaterialCommunityIcons name="qrcode-scan" size={70} color="#FF3C38" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderTopWidth: 5,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderTopColor: '#FF3C38',
    borderRadius: 10,
    width: 370,
    height: 150,
    margin: 2,
    alignSelf: 'center',
  },
  cardContent: {
    padding: 10,
    flex:1,
    position: 'relative',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FF3C38',
  },
  subtitle: {
    fontSize: 16,
    color: '#FF3C38',
  },
  info: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  scanButton: {
    position: 'absolute',
    top: 30,
    right: 140,
    backgroundColor: '#FFF',
    borderColor:"#fff",
    borderWidth:1,
    borderRadius: 5,
    padding: 8,
  },
});

export default CardComponent;
