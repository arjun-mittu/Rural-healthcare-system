import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'
import DoctorProfileScreen from './src/screens/DoctorProfileScreen'
import MedicineScreen from './src/screens/MedicineScreen'

const navigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Signup: SignupScreen,
    DoctorProfile: DoctorProfileScreen,
    Medicine: MedicineScreen
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
          title: "Health Care"
    }
});

export default createAppContainer(navigator);

//DoctorProfile- Shubham 
//MedicineTable- Manav
//Signup- Mittu