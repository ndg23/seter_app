import React from "react";
import HomeScreen from "../../screen/home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

import { StyleSheet, Text, View } from 'react-native'

const RouterContainer = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>  
  )
}

export default RouterContainer

const styles = StyleSheet.create({})

