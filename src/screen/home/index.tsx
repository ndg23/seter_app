import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardComponent from '../../common/components/card';
import AlertComponent from '../../common/components/alert';
import { TabViewComponent } from '../tab-view';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            {/* Carte en haut */}
            <View>
                <CardComponent />
            </View>
            <View style={styles.menu}>
                <TouchableOpacity onPress={() => navigation.navigate("Moi")} style={styles.iconContainer}>
                    <Ionicons name={'settings-sharp'} size={40} color={"#8A131F"} />
                </TouchableOpacity>
                <TouchableOpacity  style={styles.iconContainer}>
                    <Ionicons name={'location-sharp'} size={40} color={"#8A131F"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Clients")} style={styles.iconContainer}>
                    <MaterialIcons name={'add'} size={40} color={"#8A131F"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Produit")} style={styles.iconContainer}>
                    <MaterialCommunityIcons name={'cards'} size={40} color={"#8A131F"} />
                </TouchableOpacity>
            </View>
            {/* Composant d'alerte au milieu */}
            <View>
                <AlertComponent />
            </View>

            {/* Composant swipeable en bas */}
            <View >
                <TabViewComponent />
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: "column",
        gap: 1,
        backgroundColor:"#EDEEF0"
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    card: {
        backgroundColor: '#3498db',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
    },
    cardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    alert: {
        backgroundColor: '#e74c3c',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
    },
    alertText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    swipeable: {
        backgroundColor: '#ccc',
        flex: 1,

    },
    swipeableText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },


    helpText: {
        fontSize: 10,
        color: '#fc0324', // Couleur de texte grise
        marginBottom: 10,
    },
    header: {
        padding: 30,
        height: "20%",
        backgroundColor: '#ffffff', // Couleur d'arrière-plan du haut
    },
    balance: {
        color: '#333333', // Couleur du texte
    },
    balanceAmount: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center', // Center text horizontally
        textAlignVertical: 'center', // Center text vertically (for Android)
        height: '70%', // Make the text take up the full height of its container
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
    },
    containerPin: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        padding: 20,
        backgroundColor: "#fff"
    },
    heading: {
        fontSize: 18,
        marginBottom: 20,
        color: "#000"
    },
    // input: {
    //     borderWidth: 1,
    //     borderColor: '#d8e8f2',
    //     borderRadius: 5,
    //     width: 300,
    //     height: 40,
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     paddingHorizontal: 10,
    //     marginBottom: 20,
    // },
    button: {
        backgroundColor: '#03a1fc',
        padding: 10,
        margin: 10,

        borderRadius: 5,
    },
    cancel_button: {
        backgroundColor: '#fc031c',
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        padding: 10,
        width: 200,

        marginLeft: "auto",
        marginRight: "auto",
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
    },

    transactions: {
        backgroundColor: '#ffffff',
        height: "100%",
        marginTop: 10,
    },
    menuContent: {
        alignItems: 'center',
    },
    menuItem: {
        margin: 10,
    },

    menu: {
        flexDirection: 'row',
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-evenly",
        height: "10%",
    },
    iconContainer: {

        backgroundColor: '#fff', // Blue background color
        borderRadius: 100, // Rounded border with a high value to make it circular
        padding: 9,
        alignItems: 'center', // Center the icon horizontally within the container
        justifyContent: 'center', // Center the icon vertically within the container
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'space-around',
    },
    alertSuccess: {
        backgroundColor: '#4CAF50', // Green color
        color: '#fff', // White text color
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    modalText: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#08c999"
    },
    modalButton: {
        fontSize: 18,
        color: 'green',
        textAlign: 'center',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    refreshButtonContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 100, // Pour un bouton rond, définissez un rayon de bordure élevé
    },
    refreshButton: {
        backgroundColor: '#8A131F', // Couleur de fond du bouton (ajustez selon vos besoins)
    },

    productItem: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: '#8A131F', // Couleur de texte Twitter
    },
    addButton: {
        backgroundColor: '#8A131F', // Couleur de bouton Twitter
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },
    addButtonLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    sellButton: {
        backgroundColor: '#8A131F',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    cartButton: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    containerBottom: {
        padding: 5,
        alignContent: 'space-between',
        alignItems: 'center',
        justifyContent: "space-around",
        height: 125,
        width: "100%",
        flexDirection: 'row',
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(255, 0, 0, 0.3)', // Fond rouge léger (RGBA)
        width: 50,
        height: 50,
    },
    pane: {
        width: '100%',
    },
    containerButtonMiddle: {
        borderRadius: 100,
        height: 50,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        color: "gray",
    },
    containerButtonCheck: {
        borderRadius: 100,
        opacity: 0.7,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'green',
        backgroundColor: '#14db7e',
    },
    closeButton: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },


    refreshButtonText: {
        // color: 'grey',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
