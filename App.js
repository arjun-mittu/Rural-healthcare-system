import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from "./src/navigationRef";
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'
import MedicineScreen from './src/screens/MedicineScreen'
import PatientProfile from './src/screens/PatientProfile';
import FindDoctorScreen from "./src/screens/FindDoctorScreen";
import EditPatientProfileScreen from "./src/screens/EditPatientProfileScreen";
import AddUserData from "./src/screens/AddUserData";
import HospitalScreen from "./src/screens/HospitalScreen";
import HospitalProfile from "./src/screens/HospitalProfile";
import SignupIndex from "./src/screens/SignupIndex";
import DoctorSignup from "./src/screens/DoctorSignup";
import DoctorList from "./src/screens/DoctorList";
import EditDoctorProfileScreen from "./src/screens/EdirDoctorProfileScreen";
import MedStockScreen from './src/screens/MedStockScreen';
import ReadOnlyProfile from "./src/screens/ReadOnlyProfile";

const navigator = createStackNavigator({
    ReadOnlyProfile,
    MedStockScreen,
    DoctorList,
    EditDoctorProfileScreen,
    DoctorSignup: DoctorSignup,
    SignupIndex: SignupIndex,
    Login: LoginScreen,
    Home: HomeScreen,
    Signup: SignupScreen,
    EditPatientProfile: EditPatientProfileScreen,
    FindDoctor: FindDoctorScreen,
    Medicine: MedicineScreen,
    PatientProfile: PatientProfile,
    AddUserData: AddUserData,
    HospitalScreen: HospitalScreen,
    HospitalProfile
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

/*
    Mittu: Medicine Name -> Shops ka naam agaya
*/