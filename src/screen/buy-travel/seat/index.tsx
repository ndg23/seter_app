import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SeatScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState<number>(0);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const navigation = useNavigation<any>();

  const renderSeat = (seatNumber, isReserved) => (
    <TouchableOpacity
      style={[
        styles.seat,
        isReserved && styles.reservedSeat,
        selectedClass === 'economy' && styles.economySeat,
        selectedClass === 'business' && styles.businessSeat,
      ]}
      disabled={isReserved}
      onPress={() => handleSeatSelection(seatNumber)}
    >
      <Text style={styles.seatText}>{seatNumber}</Text>
    </TouchableOpacity>
  );

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevCount) => (isSeatSelected(seatNumber) ? prevCount - 1 : prevCount + 1));
  };

  const isSeatSelected = (seatNumber) => {
    return false; // Replace with your actual logic
  };

  const handleClassSelection = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisir votre Siège</Text>
      <View style={styles.classButtons}>
        <TouchableOpacity
          style={[
            styles.classButton,
            selectedClass === 'economy' && styles.selectedClass,
          ]}
          onPress={() => handleClassSelection('economy')}
        >
              <View style={[styles.classIcon, selectedClass === 'economy' && styles.selectedClass]}>
            <Icon name="flight" size={24} color="black" />
          </View>
          <Text style={styles.classButtonText}>Économique</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.classButton,
            selectedClass === 'business' && styles.selectedClass,
          ]}
          onPress={() => handleClassSelection('business')}
        >
          <View style={[styles.classIcon, selectedClass === 'business' && styles.selectedClass]}>
            <Icon name="business" size={24} color="black" />
          </View>
          <Text style={styles.classButtonText}>Affaires</Text>
        </TouchableOpacity>
      </View>
     
      <View style={styles.slideCounter}>
        <TouchableOpacity onPress={handlePrevSlide}>
          <Icon name="arrow-back" size={24} color="#3498db" />
        </TouchableOpacity>
        <Text style={styles.slideText}>{currentSlide}</Text>
        <TouchableOpacity onPress={handleNextSlide}>
          <Icon name="arrow-forward" size={24} color="#3498db" />
        </TouchableOpacity>
      </View>
      {currentSlide > 0 && selectedClass && (
        <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Date")}>
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
  classButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  classButton: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  classIcon: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
    marginRight: 10,
  },
  classButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedClass: {
    borderColor: 'red',
    borderWidth: 1,
  },
  seatGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  seat: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  reservedSeat: {
    backgroundColor: '#ddd',
  },
  economySeat: {
    borderColor: 'red',
    borderWidth: 2,
  },
  businessSeat: {
    borderColor: 'red',
    borderWidth: 2,
  },
  seatText: {
    fontSize: 16,
  },
  slideCounter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
  },
  slideText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: "auto",
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SeatScreen;
