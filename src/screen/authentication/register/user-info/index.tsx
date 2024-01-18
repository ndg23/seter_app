// UserInfoScreen.tsx
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

interface UserInfoScreenProps {
  route: { params: { phoneNumber: string } };
}

const UserInfoScreen: React.FC<UserInfoScreenProps> = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleContinue = () => {
    // Ici, vous pouvez implémenter la logique pour stocker les informations de l'utilisateur
    // (par exemple, en utilisant un service d'authentification).
    // Vous pouvez également naviguer vers l'écran principal de l'application.

    console.log('Informations de l\'utilisateur :', {
      userName,
      userEmail,
    });

    // Pour l'exemple, nous allons simplement afficher les informations dans la console.
    // Vous devriez implémenter la logique réelle ici.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrez vos informations</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleContinue}>
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

export default UserInfoScreen;
