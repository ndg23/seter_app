import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../../screen/home";
// import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from "../../context/auth/auth.context";
import AuthStack from "./auth.stack";
import SettingScreen from "../../../screen/setting";
import BuyTravelComponent from "../../../screen/buy-travel";
import StationChoiceScreen from "../../../screen/buy-travel/station";
import SeatScreen from "../../../screen/buy-travel/seat";
import DateChoiceScreen from "../../../screen/buy-travel/date";
import ListTicketScreen from "../../../screen/list-ticket";
import EmailUpdateScreen from "../../../screen/setting/profile/email";
import FullnameUpdateScreen from "../../../screen/setting/profile/fullname";
import ScanScreen from "../../../screen/scan";


const Tab = createNativeStackNavigator()

export default function Router() {
    const { signin } = useAuthContext()
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

                        <Tab.Screen
                            name="Travel"
                            component={BuyTravelComponent}
                            options={{
                                title: "Acceuil",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="travel"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Ticket"
                            component={ListTicketScreen}
                            options={{
                                title: "Acceuil",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="travel"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Station"
                            component={StationChoiceScreen}
                            options={{
                                title: "Station",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="phone"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Seat"
                            component={SeatScreen}
                            options={{
                                title: "Seat",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="seat"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Date"
                            component={DateChoiceScreen}
                            options={{
                                title: "Date",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="fullname"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />

                        <Tab.Screen
                            name="Setting"
                            component={SettingScreen}
                            options={{
                                title: "Setting",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="setting"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="EmailUpdate"
                            component={EmailUpdateScreen}
                            options={{
                                title: "EmailUpdate",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="setting"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="FullnameUpdate"
                            component={FullnameUpdateScreen}
                            options={{
                                title: "FullnameUpdate",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="setting"
                                        size={24}
                                        color={color}
                                    />
                                ),
                            }}
                        />

<Tab.Screen
                            name="Scan"
                            component={ScanScreen}
                            options={{
                                title: "Scan",
                                headerShown: false,
                                tabBarIcon: ({ color }) => (
                                    <Entypo
                                        name="setting"
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