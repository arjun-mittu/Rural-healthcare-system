<<<<<<< HEAD
import {NavigationActions} from "react-navigation";

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, params
        })
    )
=======
import {NavigationActions} from "react-navigation";

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, params
        })
    )
>>>>>>> aab1831a5b863a1c5e70d6660abea48745c6aa79
}