import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,TextInput, Text, View, TouchableOpacity } from 'react-native';
// import { TextInput } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EmailUpdateScreen = () => {
  const navigation = useNavigation();


  const handleGoBack = () => {
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Modifier l'email</Text>
      </View>


      {/* Main Content */}
      <View style={styles.content}>
        {/* Email Update Form */}
        <View style={styles.formContainer}>
          <View style={styles.iconContainer}>
            <Entypo name="email" size={48} color="#3498db" />
          </View>
          <TextInput
        textContentType='emailAddress'
        keyboardType='email-address'
            style={styles.input}
            // Add necessary TextInput props and styles
          />
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.buttonText}>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow:1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 28,
    color: "black",
    textAlign:"center",
    fontWeight: 'bold',
  },
  // ... (other styles)
  backButton: {
    padding: 10,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    padding: 16,
    borderRadius: 12,
    // flex:1,
    marginBottom: 6,
    // marginTop:25,
    alignItems: 'center', // Center the items horizontally
  },
  iconContainer: {
    marginBottom: 12,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#ecf0f1', // Light background color
borderRadius:100,
height:100,
width:100
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
    width: '100%', // Take up the full width of the container
  },
  updateButton: {
    backgroundColor: '#3498db', // GAFAM-like color
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop:25,
    width: '100%', // Take up the full width of the container
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EmailUpdateScreen;
