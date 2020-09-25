import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';

const SignupScreen = props => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const {state, signup} = useContext(AuthContext);

    return(
        <View style = {{...Style.background, flex: 1, justifyContent: 'center'}}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <AntDesign style = {{
                textAlign: 'center',
                marginTop: 10
            }}
                       name="user" size={75} color='rgb(3, 184, 234)' />

            <TextInput
                style = {Style.textInput}
                autoCapitalize = "none"
                value = {email}
                onChangeText = {newValue => changeEmail(newValue)}
                autoCorrect = {false}
                placeholder = "Email"/>

            <TextInput
                secureTextEntry
                style = {Style.textInput}
                autoCapitalize = "none"
                value = {password}
                onChangeText = {newValue => changePassword(newValue)}
                autoCorrect = {false}
                placeholder = "Password"/>
            {state.errorMessage ? (<Text style = {{color: 'red', textAlign: 'center', marginBottom: 10}}>{state.errorMessage}</Text>): null}
            <TouchableOpacity onPress = {() => {
                signup({email, password})
            }}>
                <Text style = {Style.buttonStyle}> Signup </Text>
            </TouchableOpacity>

        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}
export default SignupScreen;