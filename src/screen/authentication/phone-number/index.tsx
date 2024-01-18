import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

interface PhoneNumberInputProps {
  onPhoneNumberSubmit: (phoneNumber: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ onPhoneNumberSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleSubmit = () => {
    onPhoneNumberSubmit(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrez votre numéro de téléphone</Text>
      <TextInput
        style={styles.input}
        placeholder="Numéro de téléphone"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      width: 300,
      height: 40,
      borderWidth: 1,
      borderColor: '#777',
      borderRadius: 8,
      margin: 10,
      textAlign: 'center',
      fontSize: 16,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitButton: {
      marginTop: 20,
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 8,
    },
    submitButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

  export default PhoneNumberInput