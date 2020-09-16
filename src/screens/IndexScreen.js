import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = props => {
    return(
        <View>
            <Text style = {Style.heading}> Login </Text>

            <AntDesign style = {{
                textAlign: 'center',
                marginTop: 10
            }}
            name="user" size={75} color="green" />

            <TextInput
                style = {Style.textInput}
                autoCapitalize = "none"
                    autoCorrect = {false}
                    placeholder = "Username"/>

            <TextInput
                 style = {Style.textInput}
                 autoCapitalize = "none"
                 autoCorrect = {false}
                 placeholder = "Password"/>

            <TouchableOpacity>
                <Text style = {Style.buttonStyle}> LogIn </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = {{
                    textAlign: 'center',
                    margin: 10
                }}>Not Registered? Signup</Text>
            </TouchableOpacity>
        </View>
    )
}


export default IndexScreen;