import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { request, PERMISSIONS } from 'react-native-permissions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
const goBack=()=>{
  navigation.goBack();

}
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={{backgroundColor:"#f1f1f1",borderRadius:50,width:50,height:50,justifyContent:"center",alignContent:"center"}}>
          <AntDesign style={{alignSelf:"center"}} name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Scannez</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* QR Code Scanner */}
        <QRCodeScanner
          onRead={onQRCodeScanned}
          showMarker={true}
          markerStyle={{borderColor:'gray',borderStyle:"dashed",borderRadius:10}}
          containerStyle={{ flex: 1,height:250 }}
        />

        {/* Transparent Overlay */}
        <View style={styles.overlay}>
          <MaterialIcons name="qr-code-2" size={30} color="white" style={styles.icon} />
          <Text style={styles.overlayText}>Approchez un QR Code</Text>
        </View>

        {/* Additional Components */}
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
    flexDirection: 'column',
    padding: 16,
  },
  headerText: {
    fontSize: 28,
    color: "black",
    marginLeft:20,
    fontWeight: 'bold',
  },
  // ... (other styles)
  backButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    flexGrow:1,
    justifyContent: 'center',
    position: 'relative', // Make the position relative to allow overlay positioning
  },
  overlay: {
    position: 'absolute',
 
    bottom:150,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
    paddingVertical:5,
    alignSelf: 'center',
    alignContent:"space-between",
    borderRadius:20,
    justifyContent: 'center',
    flexDirection:"row",
  },
  icon: {
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
