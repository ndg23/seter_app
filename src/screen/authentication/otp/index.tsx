import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

interface OTPInputProps {
  phoneNumber: string;
  onOTPSubmit: (phoneNumber: string, otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ phoneNumber, onOTPSubmit }) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const [counter, setCounter] = useState(1000);
const navigation=useNavigation()
  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const handleSubmit = () => {
    // onOTPSubmit(phoneNumber, otp.join(''));
    navigation.navigate("Email")

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saisissez le code OTP</Text>
      <Text style={styles.explanation}>
        Veuillez entrer le code OTP à 4 chiffres que nous vous avons envoyé par SMS.
      </Text>
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
      <Text style={styles.counterText}>{`Nouveau code code à renvoyer dans  : ${counter}s`}</Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "20%",
    backgroundColor:"white",
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  explanation: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#777',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#3498db', // GAFA blue color
    borderRadius: 5,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
    color: '#333',
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 15,
    width:300,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    textAlign:"center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  counterText: {
    marginTop: 10,
    fontSize: 16,
    color: '#777',
  },
});

export default OTPInput;
