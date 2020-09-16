import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';

const navigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen
},{
    initialRouteName: 'Login',
    defaultNavigationOptions: {
          title: "Health Care"
        }
});

export default createAppContainer(navigator);