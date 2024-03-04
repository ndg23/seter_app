import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserService } from '../../../../services/user.api';

const AddEmailScreen = () => {
  const [email, setEmail] = useState('');
  const [exist, setExist] = useState(false);
  const [message, setMessage] = useState('');
  const [load, setLoad] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const data = route.params;

  const checkIfEmailExist = async () => {
    navigation.navigate('Fullname', { ...data, email });

    try {
      setLoad(true);
      const res = await UserService.checkEmail({ email });
      if (res.status == 201) {
        setLoad(false);
        setExist(true)

      }
      else if (res.status == 202) {
        navigation.navigate('Fullname', { ...data, email });
        setLoad(false)

      }
    } catch (error) {
      setLoad(false);
      // Handle error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quel est votre email ?</Text>
      <Text style={styles.description}>
        Cette information va nous aider à vous connecter ou à vous contacter en cas de problème
      </Text>

      {exist && <Text style={styles.errorText}>Cet email existe</Text>}

      <TextInput
        style={styles.input}
        placeholder="anto@seterapp.com"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        label="Adresse email"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button} onPress={checkIfEmailExist}>
        {load ? (
          <ActivityIndicator size={30} color="#FF3C38" />
        ) : (
          <Octicons name="arrow-right" color="#FF3C38" size={30} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'column',
    gap: 10,
    paddingTop: '15%',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#FF3C38',
  },
  description: {
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  button: {
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: '5%',
    marginRight: '5%',
    borderWidth: 0.5,
    width: 60,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    gap: 40,
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default AddEmailScreen;
