import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import LoginScreen from "./LoginScreen";

const DoctorProfileScreen = props => {
    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45}}>
                <Text>Doctor Profile Screen</Text>
            </View>
        </View>
    )
}

DoctorProfileScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default DoctorProfileScreen;