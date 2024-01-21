import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

import { DatePickerInput, DatePickerModal } from 'react-native-paper-dates';

import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
const DateChoiceScreen = () => {
    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [date, setDate] = React.useState(undefined);
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigation<any>();

    const [inputDate, setInputDate] = React.useState<Date | undefined>()
    const onDismissSingle = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = React.useCallback(
        (params: any) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]
    );


    const showStartDate = () => {
        setShowStartDatePicker(true);
    };

    const showEndDate = () => {
        setShowEndDatePicker(true);
    };

    return (
        <View style={styles.container}>
      <Text style={styles.title}>Date et Heure</Text>

            <View style={{ flexDirection: "column", justifyContent: "space-around",marginTop:"15%", alignItems: "center" }}>


                <DatePickerInput
                    locale="fr-FR"
                    style={styles.input}
                    inputMode={'start'}
                    value={inputDate}
                    animationType='fade'
                    saveLabel='Valider'
                    startYear={2024}
                    label={'Entrer la date'}
                    accessibilityLabel='Date du voyage'
                    inputEnabled={false}
                    selectTextOnFocus={true}
                    onChange={(d) => setInputDate(d)}
                />

            </View>

            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate("Date")}>
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>





        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        backgroundColor:"white",
        padding: 20,
    },
    filterTitle: {
        fontSize: 20,
        color: '#4285F4',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 25

    },
    input: {
        height: 50,
        borderWidth: 1,
        width: '100%',
        marginBottom: 10,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
      },
    dateButton: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,

        marginTop: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateButtonText: {
        fontSize: 16,
        color: '#4285F4',
    },
    dateText: {
        marginLeft: 15,
        fontSize: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color:"black",
        marginBottom: 20,
        textAlign: 'center',
      },
      continueButton: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: "auto",
      },
      continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
});
export default DateChoiceScreen;
