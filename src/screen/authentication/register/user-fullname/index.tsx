import {
  ActivityIndicator,
    StyleSheet,
    Text,
  
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import Octicons from 'react-native-vector-icons/Octicons';
  import { TextInput } from 'react-native-paper';
  
  import { useRoute } from '@react-navigation/native';
import { UserService } from '../../../../services/user.api';
import { IUser } from '../../../../types';
import { useAuthContext } from '../../../../common/context/auth/auth.context';
import AuthService from '../../../../services/auth.api';
  interface Props {
    navigation: any;
  }
  const AddFullnameScreen: React.FC<Props> = ({ navigation }) => {
    const [fullname, setFullname] = useState('');
    const [form, setForm] = useState<any>();
    const { error, message, onLogin, loading } = useAuthContext();
    const [isComplete, setIsComplete] = useState<boolean>(false)


    const route = useRoute();
    const data: any = route.params;
    const [loadingForm, setLoadingForm] = useState(false)
    const [err, setErr] = useState<boolean>(false)
    const [isSecureText, setIsSecureText] = useState(true); // State to manage secure text visibility
    const [isFormValid, setIsFormValid] = useState(false); // État pour suivre la validité du formulaire
  

    useEffect(() => {
      setErr(false)
      setForm({
        ...form,
        email:data.email,
        phone:data.phone,
        password:data.phone,
        role: "User"
      })
  console.log('====================================');
  console.log(form);
  console.log('====================================');
  

    }, [data])



    const handleFormSubmit = async () => {
   
        //return;
        try {
          setLoadingForm(true)
          const res = await AuthService.signup({...form,fullName:fullname})
          
          onLogin(form.email, form.password)
          setLoadingForm(false)
  
        } catch (error) {
          setErr(true)
          setLoadingForm(false)
          console.log(error);
          
        }
      
      // Ajoutez ici la logique pour soumettre le formulaire de la personne
      // Vous pouvez envoyer les données du formulaire à un serveur ou effectuer d'autres actions nécessaires.
    };
  
  
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              color: '#FF3C38',
            }}>
            Quel est votre nom ?
          </Text>
          <Text>Ce nom sera affiche sur votre profile et visible en public</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Anto Ndong"
            onChangeText={setFullname}
            label={"Nom complet"}
            autoCapitalize="none"
            keyboardType="ascii-capable"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmit}>
            {loadingForm ? <ActivityIndicator size={30} color='#FF3C38' /> : <Octicons name="arrow-right" color="#FF3C38" size={30} />
            }
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
      color: '#FF3C38',
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