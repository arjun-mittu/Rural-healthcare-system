import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = props => {
    const [username, changeUsernamne] = useState('');
    const [password, changePassword] = useState('');
    
    return(
        <View style = {{...Style.background, flex: 1, justifyContent: 'center'}}>
            <AntDesign style = {{
                textAlign: 'center',
                marginTop: 10
            }}
            name="user" size={75} color='rgb(3, 184, 234)' />

            <TextInput
                style = {Style.textInput}
                autoCapitalize = "none"
                value = {username}
                onChangeText = {newValue => changeUsernamne(newValue)}
                autoCorrect = {false}
                placeholder = "Username"/>

            <TextInput
                 style = {Style.textInput}
                 autoCapitalize = "none"
                 value = {password}
                 onChangeText = {newValue => changePassword(newValue)}
                 autoCorrect = {false}
                 placeholder = "Password"/>

            <TouchableOpacity>
                <Text style = {Style.buttonStyle}> LogIn </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Signup')}>
                <Text style = {{
                    textAlign: 'center',
                    margin: 10,
                    color: 'rgb(165, 165, 166)'
                }}>Not Registered? Signup</Text>
            </TouchableOpacity>
        </View>
    )
}


export default LoginScreen;