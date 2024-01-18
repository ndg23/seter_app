import {combineReducers} from 'redux';
import {UserReducer} from './user.reducer';
import {AuthReducer} from './auth.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import persistReducer from 'redux-persist/es/persistReducer';
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['message', 'error','load'],
};
const rootReducer = combineReducers({
  user: UserReducer,
  auth: persistReducer(authPersistConfig, AuthReducer),

});
export default rootReducer;