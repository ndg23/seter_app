import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

import { StyleSheet, Text, View } from 'react-native'
import OTPInput from "../../../screen/authentication/otp";
import PhoneNumberInput from "../../../screen/authentication/phone-number";
import UserInfoScreen from "../../../screen/authentication/register/user-info";

const RouterAuthContainer = () => {
    function handlePhoneNumberSubmit(phoneNumber: string): void {
        throw new Error("Function not implemented.");
    }

    function handleOTPSubmit(phoneNumber: string, otp: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <NavigationContainer>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="PhoneNumberInput">
                    <Stack.Screen
                        name="PhoneNumberInput"
                        options={{ title: 'Numéro de téléphone' }}
                    >
                        {(props) => <PhoneNumberInput {...props} onPhoneNumberSubmit={handlePhoneNumberSubmit} />}
                    </Stack.Screen>
                    <Stack.Screen
                        name="OTPInput"
                        options={{ title: 'Code OTP' }}
                    >
                        {(props) => <OTPInput phoneNumber={""} {...props} onOTPSubmit={handleOTPSubmit} />}
                    </Stack.Screen>
                    {/* <Stack.Screen
                        name="UserInfoScreen"
                        component={UserInfoScreen}
                        options={{ title: 'Informations utilisateur' }}
                    /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationContainer>
    )
}

export default RouterAuthContainer

const styles = StyleSheet.create({})

