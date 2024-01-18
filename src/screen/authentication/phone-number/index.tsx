import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';

interface PhoneNumberInputProps {
  onPhoneNumberSubmit: (phoneNumber: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  onPhoneNumberSubmit,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  function handleSubmit() {
    const formattedPhoneNumber = `${selectedCountry?.callingCode} ${inputValue}`;
    onPhoneNumberSubmit(formattedPhoneNumber);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veuillez entrer votre numéro de téléphone</Text>
      <Text style={styles.explanation}>
        Veuillez saisir votre numéro de téléphone ci-dessous. Nous vous enverrons un code de vérification.
      </Text>
      <PhoneInput
        value={inputValue}
        defaultCountry='SN'
        placeholder="7774939..."
        focusable={true}
        modalSearchInputPlaceholder="Rechercher votre pays"
        modalNotFoundCountryMessage="Pays non trouvé"
        popularCountries={['SN', 'GA', 'CI', 'CM','CI']}

        accessibilityLabel='Contact'
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Valider</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    color: "black",
    textAlign: 'center',
  },
  explanation: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#777',
  },
  phoneNumberDetails: {
    marginTop: 10,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 15,
    width: 300,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PhoneNumberInput;
