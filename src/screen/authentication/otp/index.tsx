import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';


interface OTPInputProps {
    phoneNumber: string;
    onOTPSubmit: (phoneNumber: string, otp: string) => void;
  }
  
  const OTPInput: React.FC<OTPInputProps> = ({ phoneNumber, onOTPSubmit }) => {
    const [otp, setOTP] = useState(['', '', '', '']);
  
    const handleOTPChange = (index: number, value: string) => {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
    };
  
    const handleSubmit = () => {
      onOTPSubmit(phoneNumber, otp.join(''));
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Entrez le code OTP envoyé à {phoneNumber}</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={digit}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(value) => handleOTPChange(index, value)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Se connecter</Text>
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
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
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

export default OTPInput;
