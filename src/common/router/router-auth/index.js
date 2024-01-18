import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../../screen/home";
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from '../context/auth/auth.context';
import AuthStack from './auth.navigation';

const Tab = createNativeStackNavigator()

export default function Router() {
    const { signin } = useAuthContext()
    const signed = AsyncStorage.getItem("@token")
    console.log(signin);
    return (
        <NavigationContainer>
            {
                signin ? <>
                    <Tab.Navigator
                        screenOptions={{
                            activeTintColor: '#f15454',
                            headerShown: false,
                        }}
                        initialRouteName={signin ? "Home" : "Auth"} // Set the initial route conditionally>
                    >
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                title: "Acceuil",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="home"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                     

                    </Tab.Navigator>
                </> : <>

                    <AuthStack />
                </>
            }

        </NavigationContainer>
    );
}