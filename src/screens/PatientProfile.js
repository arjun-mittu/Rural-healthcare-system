import React, {useContext, useEffect, useState} from 'react';
import {StatusBar, Text, View, Button,TouchableOpacity} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import Style from "../Styles";
import Separator from "../components/Separator";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const PatientProfile = props => {
    const {state, signup, signout, getUserInfo} = useContext(AuthContext);

    useEffect(() => {
        getUserInfo()
    }, [])

    return(
        <View style = {Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            {state.userInfo ?
                (<View style={{marginTop: 45}}>
                    <TouchableOpacity onPress = {signout}>
                        <SimpleLineIcons style = {{textAlign: "right", marginHorizontal: 15}} name="logout" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{marginHorizontal: 15, height: 200, justifyContent: 'center'}}>
                        <Entypo style = {{marginHorizontal: 100}} name="user" size={120} color="rgb(3, 184, 234)" />
                        <Text style = {{marginTop: 10, fontSize: 30, color:'white'}}>Hello, {state.userInfo[0].firstName}</Text>
                    </View>
                </View>)
                : null}
        </View>
    )
};

PatientProfile.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default PatientProfile;