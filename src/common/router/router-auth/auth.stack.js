import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTPInput from "../../../screen/authentication/otp";
import PhoneNumberInput from "../../../screen/authentication/phone-number";
const Tab = createNativeStackNavigator();

export default function AuthStack() {
  // const { signedIn } = useAuthContext();
  return (

    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#f15454',
        headerShown: false,
      }}
      initialRouteName='Home'
    >
      <Tab.Screen
        name="Home"
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
        name="Home"
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
    </Tab.Navigator>

  )
}