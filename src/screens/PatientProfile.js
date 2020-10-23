import React, {useContext, useEffect} from 'react';
import {StatusBar, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import Style from "../Styles";
import Separator from "../components/Separator";
import {Entypo, FontAwesome} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import {CheckBoxDataActive, CheckBoxDataPassive} from "../components/CheckBoxData";
import {BotttomNavigatorWithoutBorder} from "../components/BottomNavigator";
import { withNavigation } from 'react-navigation';

const SYMBOL_COLOR = 'rgb(3, 184, 234)';
const TEXT_COLOR = 'white';
const PatientProfile = props => {
    const {state, signout, getUserInfo} = useContext(AuthContext);

    useEffect(() => {
        getUserInfo();
    }, [])

    const redirectToSearchMedicineScreen = () => {
        props.navigation.navigate('Medicine');
    }

    const redirectToSearchHospitalScreen = () => {
        props.navigation.navigate('HospitalScreen');
    }

    const redirectToSearchDoctorScreen = () => {
        props.navigation.navigate('FindDoctor');
    }
    return(
        <View style = {Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            {state.userInfo ?
                (<View style={{marginTop: 45}}>
                    <View style = {localStyle.blocks}>
                    <View style = {{flexDirection: 'row'}}>
                        <View style = {{flex: 1}} />
                        {state.userInfo[0].userType === 'Patient' && (
                        <TouchableOpacity onPress={() => props.navigation.navigate('EditPatientProfile')}>
                            <Entypo name="edit" size={25} color={SYMBOL_COLOR}/>
                        </TouchableOpacity>)}

                        {state.userInfo[0].userType === 'Doctor' && (
                            <TouchableOpacity onPress={() => props.navigation.navigate('EditDoctorProfileScreen')}>
                                <Entypo name="edit" size={25} color={SYMBOL_COLOR}/>
                            </TouchableOpacity>)}
                    </View>
                    <View style={{height: state.userInfo[0].userType === 'Patient' ? 200 : 150, justifyContent: 'center'}}>
                        {state.userInfo[0].userType === 'Patient' && (<Entypo style={{marginHorizontal: 110}} name="user" size={90} color={SYMBOL_COLOR}/>)}
                        {state.userInfo[0].userType === 'Doctor' && (<Fontisto style={{marginHorizontal: 110}} name="doctor" size={90} color={SYMBOL_COLOR}/>)}
                        {state.userInfo[0].userType === 'Patient' && (<Text style={{
                            marginTop: 10,
                            fontSize: 30,
                            color: TEXT_COLOR,
                            textAlign: 'center'
                        }}>Hello, {state.userInfo[0].firstName}</Text>)}
                        <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            {state.userInfo[0].userType === 'Patient' && (<Entypo style={{flex: 1, textAlign: "right", marginBottom: 15}} name="location-pin"
                                     size={24} color={SYMBOL_COLOR}/>)}
                            {state.userInfo[0].userType === 'Patient' && (<Text style={{
                                fontSize: 20,
                                color: TEXT_COLOR,
                                flex: 1.25,
                                marginBottom: 15
                            }}> {state.userInfo[0].address} </Text>)}
                        </View>
                    </View>
                    </View>

                    <Separator />

                    <View style = {{...localStyle.blocks, alignItems: 'center'}}>
                        <Text style = {{color: TEXT_COLOR, fontSize: 20}}>{state.userInfo[0].firstName} {state.userInfo[0].lastName}</Text>
                    </View>

                    <Separator />
                    <View>
                    <View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                        {state.userInfo[0].gender === 'Male' ?
                            <View style = {{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <MaterialCommunityIcons style = {{marginHorizontal: 15}} name="gender-male" size={25} color={SYMBOL_COLOR} />
                                <Text style = {{color : TEXT_COLOR}}>Male</Text>
                            </View>
                                : null}
                        {state.userInfo[0].gender === 'Female' ?
                            <View style = {{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                <MaterialCommunityIcons style = {{marginHorizontal: 15}} name="gender-female" size={25} color={SYMBOL_COLOR} />
                                <Text style = {{color : TEXT_COLOR}}>Female</Text>
                            </View>
                            : null}
                            <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                                 <AntDesign style = {{marginHorizontal: 15}} name="phone" size={25} color={SYMBOL_COLOR} />
                                 <Text style = {{color : TEXT_COLOR}}>{state.userInfo[0].phoneNumber}</Text>
                            </View>
                    </View>
                        </View>
                </View>) : null}

            <Separator />
            {state.userInfo && state.userInfo[0].userType === 'Patient' && (
                < View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Fontisto style = {{marginHorizontal: 15}} name="blood-drop" size={25} color={SYMBOL_COLOR} />
                        <Text style = {{color: TEXT_COLOR}}>{state.userInfo[0].bloodGroup}</Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <MaterialCommunityIcons style = {{marginHorizontal: 15}} name="face-agent" size={25} color= {SYMBOL_COLOR} />
                        <Text style = {{color: TEXT_COLOR}}>{state.userInfo[0].age} yrs old</Text>
                    </View>
                </View>)}

            {state.userInfo && state.userInfo[0].userType === 'Patient' && (
                <View>
                <Separator />
                    <View style = {localStyle.blocks}>
                    < View style = {{flexDirection: 'row'}}>
                        {state.userInfo[0].diabitic === 'Yes' ?
                            (<CheckBoxDataActive data = 'Diabetes'/>) : (<CheckBoxDataPassive data = 'Diabetes'/>)}
                        {state.userInfo[0].highBloodPressure == "Yes" ?
                            (<CheckBoxDataActive data = 'High BP'/>) : (<CheckBoxDataPassive data = 'High BP'/>)}
                    </View>
                        <View style ={{width : '100%', height: 10}}/>
                        < View style = {{flexDirection: 'row', marginTop: 15}}>
                            {state.userInfo[0].currentUnderDiagnosis == "Yes" ?
                                (<CheckBoxDataActive data = 'Under Diagnosis'/>) : (<CheckBoxDataPassive data = 'Under Diagnosis'/>)}

                            {state.userInfo[0].sugar === "Yes" ?
                                (<CheckBoxDataActive data = 'Sugar'/>) : (<CheckBoxDataPassive data = 'Sugar'/> )}
                        </View>
                    </View>
                </View>
                  )}


            {state.userInfo && (
                      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                        <View style = {{flexDirection: 'row'}}>

                            <BotttomNavigatorWithoutBorder callBack = {signout} symbolName = 'logout' text = "Logout" />
                            <BotttomNavigatorWithoutBorder callBack = {redirectToSearchMedicineScreen} symbolName = 'search1' text = "Medicine" />
                            <BotttomNavigatorWithoutBorder callBack = {redirectToSearchDoctorScreen} symbolName = 'search1' text = "Doctor" />
                            <BotttomNavigatorWithoutBorder callBack = {redirectToSearchHospitalScreen} symbolName = 'search1' text = "Hospital" />
                        </View>
                      </View>
            )}


            {state.userInfo && state.userInfo[0].userType === 'Doctor' && (
                < View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Entypo style = {{marginHorizontal: 15}} name="location-pin" size={25} color={SYMBOL_COLOR} />
                        <Text style = {{color: TEXT_COLOR}}>{state.userInfo[0].address}</Text>
                    </View>
                </View>)}

            <Separator />
            {state.userInfo && state.userInfo[0].userType === 'Doctor' && (
                < View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <FontAwesome style = {{marginHorizontal: 20}} name="rupee" size={25} color={SYMBOL_COLOR} />
                        <Text style = {{color: TEXT_COLOR}}>Appointment Fees: {state.userInfo[0].fees}</Text>
                    </View>
                </View>)}

            <Separator />
            {state.userInfo && state.userInfo[0].userType === 'Doctor' && (
                <View style = {{...localStyle.blocks, flexDirection: 'row'}}>
                    <View style = {{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Text style = {{marginHorizontal: 15, fontSize: 20, color: SYMBOL_COLOR}}>Specialisation in</Text>
                        <Text style = {{color: TEXT_COLOR}}>{state.userInfo[0].specialisation}</Text>
                    </View>
                </View>)}
        </View>
    )
};

PatientProfile.navigationOptions = () => {
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

export default withNavigation(PatientProfile);