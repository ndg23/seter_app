import {
    StyleSheet,
    Text,
  
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import Octicons from 'react-native-vector-icons/Octicons';
  import { TextInput } from 'react-native-paper';
  
  import { useRoute } from '@react-navigation/native';
  interface Props {
    navigation: any;
  }
  const AddFullnameScreen: React.FC<Props> = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const route = useRoute();
    const data: any = route.params;
  
  
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              color: 'black',
            }}>
            Quel est votre nom ?
          </Text>
          <Text>Ce nom sera affiche sur ton profil et visible en public</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Anto Ndong"
            onChangeText={setFullname}
            label={"Nom complet"}
            autoCapitalize="none"
            keyboardType="ascii-capable"
          />
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate('Password', { ...data, fullname: fullname })}>
            <Octicons name="arrow-right" color="#8A131F" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      marginTop: "15%",
      flexDirection:"column",
      gap:10
    },
    button: {
      height: 60,
      backgroundColor: '#fff',
      justifyContent: 'center',
      marginTop: '5%',
      marginRight: '5%',
      width: 60,
      borderWidth: .5,
      alignSelf: 'flex-end',
      flexDirection: 'row',
      gap: 40,
      alignItems: 'center',
      borderRadius: 100,
    },
    buttonText: {
      fontSize: 18,
      color: '#8A131F',
    },
    input: {
      height: 50,
      borderWidth: 1,
      width: '100%',
      marginBottom: '10%',
      marginTop: '5%',
      backgroundColor:"white",
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  });
  export default AddFullnameScreen;