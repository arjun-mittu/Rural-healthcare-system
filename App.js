import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import SignupScreen from './src/screens/SignupScreen'

const navigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Signup: SignupScreen
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
          title: "Health Care"
        }
});

export default createAppContainer(navigator);