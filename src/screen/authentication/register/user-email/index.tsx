import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useState } from 'react';
  import Octicons from 'react-native-vector-icons/Octicons';
  import { useNavigation, useRoute } from '@react-navigation/native';
  import { TextInput } from 'react-native-paper';
  
  import { ActivityIndicator } from 'react-native-paper';
  
  const AddEmailScreen= () => {
    const [email, setEmail] = useState({ email: '' });
    const [exist, setExist] = useState(false);
    const [message, setMessage] = useState("")
    const [load, setLoad] = useState(false)
  const navigation=useNavigation()
    const route = useRoute();
    const data: any = route.params;
   
    const checkIfEmailExist = async () => {
      setLoad(true)
    //   const res = await UserService.checkEmail(email)
      setLoad(false)
  
      
  
  
    }
  
  
  
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              color: 'indigo',
            }}>
            Quel est votre email ?
          </Text>
          <Text>Cette information va nous aider à vous connecter ou à vous contacter en cas de probleme</Text>
  
          {exist && <Text style={{ color: "red", marginTop: "5%" }}>Cet email existe</Text>}
  
          <TextInput
            style={styles.input}
            placeholder="anto@seterapp.com"
            onChangeText={text => setEmail({ email: text })}
            autoCapitalize="none"
            label={'Adresse email'}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={()=>checkIfEmailExist()}>
            {load ? <ActivityIndicator size={30} color='indigo' /> : <Octicons name="arrow-right" color="indigo" size={30} />
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default AddEmailScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
  
      marginTop:"15%"
    },
    button: {
      height: 60,
      backgroundColor: '#fff',
      justifyContent: 'center',
      marginTop: '5%',
      marginRight: '5%',
      borderWidth: .5,
  
      width: 60,
      alignSelf: 'flex-end',
      flexDirection: 'row',
      gap: 40,
      alignItems: 'center',
      borderRadius: 100,
    },
    buttonText: {
      fontSize: 18,
      color: '#fff',
    },
    input: {
      height: 50,
      borderWidth: 1,
      width: '100%',
      marginBottom: '10%',
      borderColor: '#ccc',
      backgroundColor:"white",
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  });