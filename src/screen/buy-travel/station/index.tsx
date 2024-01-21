import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StationChoiceScreen = () => {
  const [selectedStation, setSelectedStation] = useState<string | null>(null);
  const navigation = useNavigation<any>();

  const stations = [
    { id: '1', name: 'Station A', icon: 'train' },
    { id: '2', name: 'Station B', icon: 'train' },
    { id: '3', name: 'Station C', icon: 'train' },
    // Add more stations as needed
  ];

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[
        styles.stationItem,
        selectedStation === item.id && styles.selectedStation, // Apply border color if selected
      ]}
      onPress={() => setSelectedStation(item.id)}
    >
      <View style={styles.iconContainer}>
        <Icon name={item.icon} size={30} color="#3498db" />
      </View>
      <View style={styles.stationInfo}>
        <Text style={styles.stationName}>{item.name}</Text>
        {/* Add additional information for each station */}
        <Text style={styles.stationDetails}>Details about the station</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir une Station</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Rechercher une station" />
      </View>
      <FlatList
        data={stations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.stationList}
      />
      {selectedStation && (
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Seat",{selectedStation})}>
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  stationList: {
    flex: 1,
  },
  stationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 15,
  },
  selectedStation: {
    borderColor: '#3498db',
    borderWidth: 2,
  },
  iconContainer: {
    marginRight: 15,
  },
  stationInfo: {
    flex: 1,
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stationDetails: {
    fontSize: 14,
    color: '#555',
  },
  continueButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StationChoiceScreen;
