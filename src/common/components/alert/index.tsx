import React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

const AlertContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin: 2px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const AlertTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const AlertContent = styled.Text`
  font-size: 16px;
  color: #34495e;
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #3498db;
`;

const AlertComponent = () => {
  const showAlert = () => {
    Alert.alert(
      'Titre de l\'alerte',
      'Contenu de l\'alerte',
      [
        { text: 'Annuler', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    <AlertContainer>
      <AlertTitle>Important!</AlertTitle>
      <AlertContent>Ceci est un message important pour l'utilisateur.</AlertContent>
      <StyledButton
        title="OK"
        onPress={showAlert}
        buttonStyle={{ backgroundColor: '#3498db' }}
        titleStyle={{ fontSize: 16 }}
      />
    </AlertContainer>
  );
};

export default AlertComponent;
