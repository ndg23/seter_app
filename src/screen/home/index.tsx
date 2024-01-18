import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardComponent from '../../common/components/card';
import AlertComponent from '../../common/components/alert';
import { TabViewComponent } from '../tab-view';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Carte en haut */}
            <View>
                <CardComponent />
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
});
