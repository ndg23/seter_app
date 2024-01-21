// Import necessary modules from React Native
import React from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Custom Header Component
const Header: React.FC = () => {
  return (
    <View style={stylesHeader.container}>
      <Ionicons name="settings" size={24} color="white" />
      <Text style={stylesHeader.title}>Paramètres</Text>
    </View>
  );
};

// Define the SettingScreen functional component
const SettingScreen: React.FC = () => {
  const [notification, setNotification] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [emailNotification, setEmailNotification] = React.useState(true);
  const [language, setLanguage] = React.useState('Français');
  const [passwordProtection, setPasswordProtection] = React.useState(false);
  const [autoLogout, setAutoLogout] = React.useState(false);
  const [currency, setCurrency] = React.useState('EUR');
  const [distanceUnit, setDistanceUnit] = React.useState('kilomètres');
  const [travelMode, setTravelMode] = React.useState('voiture');

  const toggleNotification = () => setNotification(!notification);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleEmailNotification = () => setEmailNotification(!emailNotification);
  const changeLanguage = () => {}; // You can implement language selection logic here
  const togglePasswordProtection = () => setPasswordProtection(!passwordProtection);
  const toggleAutoLogout = () => setAutoLogout(!autoLogout);
  const changeCurrency = () => {}; // You can implement currency selection logic here
  const changeDistanceUnit = () => {}; // You can implement distance unit selection logic here
  const changeTravelMode = () => {}; // You can implement travel mode selection logic here

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Custom Header */}
      {/* <Header /> */}

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Informations Personnelles</Text>
        <TouchableOpacity onPress={changeTravelMode} style={styles.settingItem}>
          <FontAwesome5 name="user-alt" size={24} color="#007AFF" />
          <Text style={{ marginLeft: 8, color: "black" }}> Moi</Text>
          <Text style={styles.languageText}>@Anto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="notifications" size={24} color="#007AFF" />
          <Text style={{ marginLeft: 8, color: "black" }}> Notifications</Text>
          <Switch style={styles.languageText} value={notification} onValueChange={toggleNotification} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="mail" size={24} color="#007AFF" />
          <Text style={{ marginLeft: 8, color: "black" }}> Notifications par email</Text>
          <Switch style={styles.languageText} value={emailNotification} onValueChange={toggleEmailNotification} />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Securite</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="lock-closed" size={24} color="#007AFF" />
          <Text style={{marginLeft:8,color:"black"}}> Protection par mot de passe</Text>
          <Switch style={styles.languageText} value={passwordProtection} onValueChange={togglePasswordProtection} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="timer" size={24} color="#007AFF" />
          <Text style={{marginLeft:8,color:"black"}}> Auto Déconnexion</Text>
          <Switch style={styles.languageText} value={autoLogout} onValueChange={toggleAutoLogout} />
        </TouchableOpacity>

      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Parametres de l'application</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="moon" size={24} color="#007AFF" />
          <Text style={{marginLeft:8,color:"black"}}> Mode Sombre</Text>
          <Switch style={styles.languageText}  value={darkMode} onValueChange={toggleDarkMode} />
        </TouchableOpacity>

        <TouchableOpacity onPress={changeLanguage} style={styles.settingItem}>
          <Ionicons name="language" size={24} color="#007AFF" />
          <Text style={{marginLeft:8,color:"black"}}> Langue</Text>
          <Text style={styles.languageText}>{language}</Text>
        </TouchableOpacity>

      </View>


      {/* Add more section containers and TouchableOpacity components for each setting section */}

      {/* Copyright Section */}
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>© 2024 Setapp</Text>
      </View>
    </ScrollView>
  );
};

// Define the styles using StyleSheet
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  sectionContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    elevation: 0,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#bbb',
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  languageText: {
    justifyContent: "flex-end",
    textAlign: "right",
    marginLeft: "auto",
    color: '#007AFF',
  },
  copyrightContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 12,
    color: '#777',
  },
});

// Header styles
const stylesHeader = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export the SettingScreen component
export default SettingScreen;
