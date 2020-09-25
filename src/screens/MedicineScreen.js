import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import LoginScreen from "./LoginScreen";

const MedicineScreen = props => {
    return(
        <View style = {Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45}}>
                <Text>Medicine Screen</Text>
            </View>
        </View>
    )
}

MedicineScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default MedicineScreen;