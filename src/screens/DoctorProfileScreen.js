import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import Style from '../Styles';
import {AntDesign, Entypo, Fontisto, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';
import Separator from "../components/Separator";
import {BotttomNavigatorWithoutBorder} from "../components/BottomNavigator";
import {Context as AuthContext} from "../context/AuthContext";

const SYMBOL_COLOR = 'rgb(3, 184, 234)';
const TEXT_COLOR = 'white';
const doctorGender = 'Male'
const DoctorProfileScreen = props => {
    const doctorData = true;
    const {signout} = useContext(AuthContext);
    const redirectToSearchMedicineScreen = () => {
        props.navigation.navigate('Medicine');
    }

    const redirectToSearchDoctorScreen = () => {
        props.navigation.navigate('FindDoctor');
    }
    return(
        <View style = {Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            {doctorData ?
                (<View style={{marginTop: 45}}>
                    <View style = {localStyle.blocks}>
                        <View style = {{flexDirection: 'row'}}>
                            <View style = {{flex: 1}} />
                            <TouchableOpacity onPress = {() => props.navigation.navigate('EditPatientProfile')}>
                                <Entypo name="edit" size={25} color={SYMBOL_COLOR} />
                            </TouchableOpacity>
                        </View>
                        <View style={{height: 150, justifyContent: 'center'}}>
                            <Fontisto style = {{marginHorizontal: 110}} name="doctor" size={90} color={SYMBOL_COLOR} />
                        </View>
                    </View>

                    <Separator />

                    <View style = {{...localStyle.blocks, alignItems: 'center'}}>
                        <Text style = {{color: TEXT_COLOR, fontSize: 20}}>First Last Name</Text>
                    </View>

                    <Separator />
                    <View>
                        <View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                            {doctorGender === 'Male' ?
                                <View style = {{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                    <MaterialCommunityIcons style = {{marginHorizontal: 15}} name="gender-male" size={25} color={SYMBOL_COLOR} />
                                    <Text style = {{color : TEXT_COLOR}}>Male</Text>
                                </View>
                                : null}
                            {doctorGender === 'Female' ?
                                <View style = {{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                    <MaterialCommunityIcons style = {{marginHorizontal: 15}} name="gender-female" size={25} color={SYMBOL_COLOR} />
                                    <Text style = {{color : TEXT_COLOR}}>Female</Text>
                                </View>
                                : null}
                            <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                                <AntDesign style = {{marginHorizontal: 15}} name="phone" size={25} color={SYMBOL_COLOR} />
                                <Text style = {{color : TEXT_COLOR}}>Doctor Phone</Text>
                            </View>
                        </View>
                    </View>
                </View>) : null}

            <Separator />
            {doctorData && (
                < View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo style = {{marginHorizontal: 15}} name="location-pin" size={25} color={SYMBOL_COLOR} />
                        <Text style = {{color: TEXT_COLOR}}>Clinic Address</Text>
                    </View>
                </View>)}

            <Separator />
            {doctorData && (
                < View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome style = {{marginHorizontal: 15}} name="rupee" size={25} color={SYMBOL_COLOR} />
                        <Text style = {{color: TEXT_COLOR}}>Doctor Fees</Text>
                    </View>
                </View>)}

            <Separator />
            {doctorData && (
                <View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style = {{marginHorizontal: 15, fontSize: 20, color: SYMBOL_COLOR}}>Specialisation in</Text>
                        <Text style = {{color: TEXT_COLOR}}>Specialisation</Text>
                    </View>
                </View>)}


            {doctorData && (
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                    <View style = {{flexDirection: 'row'}}>
                        <BotttomNavigatorWithoutBorder callBack = {signout} symbolName = 'logout' text = "Logout" />
                        <BotttomNavigatorWithoutBorder callBack = {redirectToSearchMedicineScreen} symbolName = 'search1' text = "Medicine" />
                        <BotttomNavigatorWithoutBorder callBack = {redirectToSearchDoctorScreen} symbolName = 'search1' text = "Doctor" />
                    </View>
                </View>
            )}
            <Separator />
        </View>
    )
}

DoctorProfileScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}
const localStyle = StyleSheet.create({
    blocks: {
        backgroundColor: 'rgb(38, 41, 43)',
        marginHorizontal: 15,
        borderRadius: 15,
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgb(38, 41, 43)'
    }
})

export default DoctorProfileScreen;