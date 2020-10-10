import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import {Context as AuthContext} from '../context/AuthContext';

const EditPatientProfileScreen = props => {
    return(
        <View style ={Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45}}>
                <Text>Edit Patient Profile Screen</Text>

            </View>
        </View>
    )
}

EditPatientProfileScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default EditPatientProfileScreen;