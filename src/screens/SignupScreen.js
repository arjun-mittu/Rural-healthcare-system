import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';
import {Context as AuthContext} from '../context/AuthContext';
import InputTextBox from "../components/InputTextBox";

const SignupScreen = props => {
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const {state, signup, postUserInfo} = useContext(AuthContext);
    const [tokenFetched, isTokenGenerated] = useState(false);

    const changeTokenStatus = (value) => {
        console.log('Value changed');
        isTokenGenerated(value);
    }

    return(
        <View style = {{...Style.background, flex: 1, justifyContent: 'center'}}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <AntDesign style = {{
                textAlign: 'center',
                marginTop: 10
            }}
                       name="user" size={75} color='rgb(3, 184, 234)' />
            <InputTextBox data = 'Email' value = {email} stateChange ={newValue => changeEmail(newValue)} />
            <InputTextBox data = 'Password' value = {password} stateChange ={newValue => changePassword(newValue)} />
            {state.errorMessage ? (<Text style = {{color: 'red', textAlign: 'center', marginBottom: 10}}>{state.errorMessage}</Text>): null}
            <TouchableOpacity onPress = {() => {
                signup({email, password}, (value) => {
                    changeTokenStatus(value)})
            }}>
                {tokenFetched && props.navigation.navigate('AddUserData')}
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