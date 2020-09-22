import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, Picker, TouchableOpacity} from 'react-native';
import Style from '../Styles';

const HomeScreen = props => {
    const[pickerValue, changePickerValue] = useState('');
    return(
        <View>
            <Text style = {Style.heading}>Home Screen </Text>
            <Text style = {Style.subHeading}> About </Text>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Login')}>
                <Text style = {{...Style.buttonStyle, marginTop: 20}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Signup')}>
                <Text style = {{...Style.buttonStyle, marginTop: 20}}>Signup</Text>
            </TouchableOpacity>

            <Picker style = {{width: '100%'}}
                selectedValue = {pickerValue}
                onValueChange = {(itemValue, itemIndex) => changePickerValue(itemValue)}>
                <Picker.item label = 'Login' value = 'login' />
                <Picker.item label = 'Signup' value = 'signup' />
            </Picker>
        </View>
    )
}


export default HomeScreen;