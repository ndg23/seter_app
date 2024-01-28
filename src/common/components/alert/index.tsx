import React from 'react';
import { Alert } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';

const getAlertColor = (type) => {
  switch (type) {
    case 'success':
      return '#d4edda'; // Green background for success
    case 'warning':
      return '#fff3cd'; // Yellow background for warning
    case 'info':
      return '#d1ecf1'; // Blue background for info
    default:
      return '#fff'; // Default background color
  }
};

const getBorderColor = (type) => {
  switch (type) {
    case 'success':
      return '#c3e6cb'; // Green border color for success
    case 'warning':
      return '#ffeeba'; // Yellow border color for warning
    case 'info':
      return '#bee5eb'; // Blue border color for info
    default:
      return 'red'; // Default border color
  }
};

const AlertContainer = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border-left-width: 5px;
  margin: 5px;
  border-color: ${(props) => getBorderColor(props.type)};
`;

const AlertTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const AlertTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
`;

const AlertContent = styled.Text`
  font-size: 16px;
  color: #34495e;
  margin-bottom: 15px;
`;

const StyledButton = styled(Button)`
  background-color: #3498db;
`;

const getIconName = (type) => {
  switch (type) {
    case 'success':
      return 'checkmark'; // Green checkmark for success
    case 'warning':
      return 'warning'; // Yellow warning icon for warning
    case 'info':
      return 'info'; // Blue info icon for info
    default:
      return 'information-circle-outline';
  }
};

const AlertComponent = ({ type = 'warning' }) => {
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
    <AlertContainer type={type}>
      <AlertTitleContainer>
        <Entypo name={getIconName('info')} size={30} color="#3498db" />
        <AlertTitle>Important!</AlertTitle>
      </AlertTitleContainer>
      <AlertContent>Ceci est un message important pour l'utilisateur.</AlertContent>
      {/* <StyledButton title="Afficher l'alerte" onPress={showAlert} /> */}
    </AlertContainer>
  );
};

export default AlertComponent;
