import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTPInput from "../../../screen/authentication/otp";
import PhoneNumberInput from "../../../screen/authentication/phone-number";
import AddFullnameScreen from "../../../screen/authentication/register/user-fullname";
import AddEmailScreen from "../../../screen/authentication/register/user-email";
const Tab = createNativeStackNavigator();

export default function AuthStack() {
  // const { signedIn } = useAuthContext();
  return (

    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
        headerShown: false,
      }}
      initialRouteName='Email'
    >
      <Tab.Screen
        name="Phone"
        component={PhoneNumberInput}
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
        name="Otp"
        component={OTPInput}
        options={{
          title: "Otp",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name="otp"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Fullname"
        component={AddFullnameScreen}
        options={{
          title: "Fullname",
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
        name="Email"
        component={AddEmailScreen}
        options={{
          title: "Email",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name="email"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>

  )
}