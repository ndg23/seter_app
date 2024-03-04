import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const AppNameCenter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.appName}>transita</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appName: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#FF3C38',
    },
});

export default AppNameCenter;
