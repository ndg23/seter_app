import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {ActivityIndicator} from 'react-native-paper';
import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextProvider } from './src/common/context/auth/auth.context';
import UserContextProvider from './src/common/context/user';
import Router from './src/common/router/router-auth';
import store from './src/common/redux/store';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

let persistor = persistStore(store);
function App(): JSX.Element {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);
  if (!isReady) {
    return <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size={15} color="blue" />
    </View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator size={25} color="#FF3C38" />} persistor={persistor}>
          <AuthContextProvider>
            <UserContextProvider>
                <Router />
            </UserContextProvider>
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;