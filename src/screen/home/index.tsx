import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import CardComponent from '../../common/components/card';
import AlertComponent from '../../common/components/alert';
import { TabViewComponent } from '../tab-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ItemTravelComponent from '../../common/components/item-voyage';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <ScrollView style={styles.container}>
            {/* Carte en haut */}
            <View>
                <CardComponent balance={0} currency={''} cardNumber={''} />
            </View>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate("Setting")} style={styles.iconContainer}>
                    <Ionicons name={'settings-sharp'} size={40} color={"#02bee3"} />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.iconContainer}>
                    <Ionicons name={'location-sharp'} size={40} color={"#02bee3"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Station")} style={styles.iconContainer}>
                    <MaterialIcons name={'add'} size={40} color={"#02bee3"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Ticket")} style={styles.iconContainer}>
                    <MaterialCommunityIcons name={'cards'} size={40} color={"#02bee3"} />
                </TouchableOpacity>
            </View>
            {/* Composant d'alerte au milieu */}
            <View>
                <AlertComponent />
            </View>

            {/* Composant swipeable en bas */}
         
                <ItemTravelComponent trainName={'TER002'} departureTime={'11:00'} arrivalTime={'10:00'} platformNumber={'30'}/>
                <ItemTravelComponent trainName={'TER002'} departureTime={'11:00'} arrivalTime={'10:00'} platformNumber={'30'}/>
                <ItemTravelComponent trainName={'TER002'} departureTime={'11:00'} arrivalTime={'10:00'} platformNumber={'30'}/>
                <ItemTravelComponent trainName={'TER002'} departureTime={'11:00'} arrivalTime={'10:00'} platformNumber={'30'}/>
                <ItemTravelComponent trainName={'TER002'} departureTime={'11:00'} arrivalTime={'10:00'} platformNumber={'30'}/>
          
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexGrow:1,
        backgroundColor:"#EDEEF0"
    },
    menu: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "10%",
    },
    iconContainer: {
        backgroundColor: '#fff',
        borderRadius: 100,
        padding: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
