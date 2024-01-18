import React, { useState, useEffect, useContext } from 'react';
import AuthService from '../../../services/auth.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { removeData, storeData } from '../../../utils';
import { AuthContext } from './create.context.js';
import { useDispatch } from 'react-redux';
import { fetchUserSuccess } from '../../redux/actions/user.action.js';
import { loginFailure } from '../../redux/actions/auth.action';
export const useAuthContext = () => {
  return useContext(AuthContext);
};


export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  const [error, setError] = useState(false);
  const [signin, setSignin] = useState();
  const dispatch = useDispatch();
  const onLogin = async (email, password) => {
    try {
      setLoading(true);
      const res = await AuthService.signin({ email, password });
    
      if (res?.status == 201||res?.status == 200) {
        // storeData('token', res?.data.access_token);
        // storeData('user', res?.data.user);  
        console.log(res.data.access_token);
        await AsyncStorage.setItem('@user', JSON.stringify(res.data.user));
        await AsyncStorage.setItem('@token', res.data.access_token);
        setSignin(true)
        dispatch(fetchUserSuccess(res.data.user));
        setToken(res.data.access_token);
        setLoading(false);
        return res.data;
      }
      //console.log(res.data);
      setError(true);
      setLoading(false);
      setMessage("Probleme avec le mot de passe ou l'email!");

      dispatch(loginFailure({ message: message, error: true }))
    } catch (error) {
      setLoad(false);
      setError(true);
      setMessage("Probleme avec le mot de passe ou l'email!");

    }
  };
  const onSignup = async data => {
    try {
      setLoad(true);
      const res = await AuthService.signup(data);
      if (res?.status == 201|| res.status==200) {
        // storeData('token', res?.data);
        setToken(res.data.access_token);
        setLoad(false);
        dispatch(fetchUserSuccess(res.data.userSaved));
        setSignin(true);
      }
      if (res.status == 400) {
        setLoad(false);
        setError(true);
        setMessage('Formulaire incomplet !');
      }
      setError(true);
      setLoad(false);
      //console.log(res);
      setMessage('Une erreur est survenue !');
    } catch (error) {
      setError(true);
      setLoad(false);
      setMessage('Une erreur est survenue !');

      //console.log(error.message);
    }
  };
  const onSignOut = async () => {
    setToken(null);
    await removeData('token');
    setSignin(false);
  };
  useEffect(() => {
    AsyncStorage.getItem('@token')
      .then(token => {
        setToken(token);
        if (token == null) {
          setSignin(false);
          console.log(token);
          return;
        }
        setSignin(true);
      })
      .catch(error => {
        //console.log(error);
        setToken(null);
        setSignin(false);
      });
  }, []);


  


  return (
    <AuthContext.Provider
      value={{
        message,
        error,
        load,
        signin,
        token,
        onLogin,
        onSignup,
        onSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};