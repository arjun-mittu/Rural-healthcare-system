import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Picker, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../Styles';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = props => {
    const [pickerValue, changePickerValue] = useState('');
    return (
        <View style={Style.background}>
            <Text style={Style.subHeading}> About </Text>
            <Text style={Style.paragraph}>    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.</Text>
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <View style={{ height: 1, backgroundColor: 'rgb(3, 184, 234)' }} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.navigate('Login')}>
                        <View style={{ height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <AntDesign style={{ ...Style.imageButton }}
                                name="user" size={25} color='rgb(165, 165, 166)' />
                            <Text style={{ marginLeft: 16, textAlignVertical: 'center', color: 'rgb(3, 184, 234)' }}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: 1, backgroundColor: 'rgb(3, 184, 234)' }} />
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => props.navigation.navigate('Signup')}>
                        <View style={{ height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <AntDesign style={{ ...Style.imageButton }}
                                name="adduser" size={25} color='rgb(165, 165, 166)' />
                            <Text style={{ marginLeft: 16, textAlignVertical: 'center', color: 'rgb(3, 184, 234)' }}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default HomeScreen;