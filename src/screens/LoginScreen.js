import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';
import UserContext from "../context/UserContext";

const search = (database, username, password) => {
    for(let i = 0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return i;
        }
        return -1;
    }
}

let renderAuthentication = undefined;

const validateUser = (username, password, database, changeLoggedStatus, changeLoggedUserID) => {
    const authenticatedUserID = search(database, username, password);

    if(authenticatedUserID !== -1){
        database[authenticatedUserID].isLoggedIn = true;
        changeLoggedUserID(authenticatedUserID);
        changeLoggedStatus(true);
    }
    else{
        changeLoggedStatus(false);
        changeLoggedUserID(-1);
    }
}


const LoginScreen = props => {
    const [customRender, triggerCustomRender] = useState(false);
    const [username, changeUsernamne] = useState('');
    const [password, changePassword] = useState('');
    const value = useContext(UserContext);
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

            <TouchableOpacity onPress = {() => {
                validateUser(username, password, value[0], value[1], value[3]);
                {value[2] !== -1 && (props.navigation.navigate('PatientProfile'))}
                {value[2] === -1 && (
                    renderAuthentication = () => {
                    return <Text style = {{color: 'red', textAlign: 'center'}}>Username or Password is Incorrect</Text>
                }), triggerCustomRender(true)}
            }}>
                <Text style = {Style.buttonStyle}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => props.navigation.navigate('Signup')}>
                <Text style = {{
                    textAlign: 'center',
                    margin: 10,
                    color: 'rgb(165, 165, 166)'
                }}>Not Registered? Signup</Text>
            </TouchableOpacity>
            {customRender && renderAuthentication()}
        </View>
    )
}


export default LoginScreen;