import React, {useState, useContext, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import {NavigationEvents} from "react-navigation";
import { AntDesign } from '@expo/vector-icons';
import {Context as AuthContext} from "../context/AuthContext";

const LoginScreen = props => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const {state, signin, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    useEffect(()=> {
        tryLocalSignin();
    }, [])

    return(
        <View style = {{...Style.background, flex: 1, justifyContent: 'center'}}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <NavigationEvents
                onWillBlur = {clearErrorMessage}
            />
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
            <TouchableOpacity onPress = {() => signin({email, password})}>
                <Text style = {Style.buttonStyle}> Login </Text>
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

LoginScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}
export default LoginScreen;