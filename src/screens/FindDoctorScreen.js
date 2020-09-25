import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';

const FindDoctorScreen = props => {
    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45}}>
                <Text>Find Doctor Screen</Text>
            </View>
        </View>
    )
}

FindDoctorScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default FindDoctorScreen;