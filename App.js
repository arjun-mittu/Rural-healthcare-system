import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'
import DoctorProfileScreen from './src/screens/DoctorProfileScreen'
import MedicineScreen from './src/screens/MedicineScreen'
import PatientProfile from './src/screens/PatientProfile';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from "./src/navigationRef";
import FindDoctorScreen from "./src/screens/FindDoctorScreen";
import EditPatientProfileScreen from "./src/screens/EditPatientProfileScreen";

const navigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Signup: SignupScreen,
    EditPatientProfile: EditPatientProfileScreen,
    DoctorProfile: DoctorProfileScreen,
    FindDoctor: FindDoctorScreen,
    Medicine: MedicineScreen,
    PatientProfile: PatientProfile
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
          title: "Health Care"
    }
});

const App = createAppContainer(navigator);

export default () => {
    return <>
        <AuthProvider>
            <App ref ={(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
        </>
};
//DoctorProfile- Shubham 
//MedicineTable- Manav
//Signup- Mittu