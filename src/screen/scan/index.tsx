import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { request, PERMISSIONS } from 'react-native-permissions';

const ScanScreen = ({ navigation }) => {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);
    if (result === 'granted') {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  };

  const onQRCodeScanned = ({ data }) => {
    console.log(`Scanned QR Code: ${data}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ScanScreen</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* QR Code Scanner */}
        <QRCodeScanner
          onRead={onQRCodeScanned}
          showMarker={true}
          containerStyle={{ flex: 1 }}
          cameraStyle={{ flex: 1 }}
        />

        {/* Additional Components */}
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScanScreen;
