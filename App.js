import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'
import DoctorProfileScreen from './src/screens/DoctorProfileScreen'
import MedicineScreen from './src/screens/MedicineScreen'
import {UserProvider} from './src/context/UserContext';
import PatientProfile from './src/screens/PatientProfile';

const navigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Signup: SignupScreen,
    DoctorProfile: DoctorProfileScreen,
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
    return <UserProvider>
        <App/>
    </UserProvider>
}

//DoctorProfile- Shubham 
//MedicineTable- Manav
//Signup- Mittu