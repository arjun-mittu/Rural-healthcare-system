<<<<<<< HEAD
import React from 'react';
import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import userDataApi from "../api/userDataApi";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error': return {...state, errorMessage: action.payload};
        case 'signup': return {token: action.payload, errorMessage: ''};
        case 'signin': return {token: action.payload, errorMessage: ''};
        case 'clearErrorMessage': return {...state, errorMessage: ''};
        case 'signout': return {token: null, errorMessage: ''}
        case 'userInfo': return {...state, userInfo: action.payload}
        default: return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signup', payload: token});
        navigate('PatientProfile');
    }
    else{
        navigate('Login');
    }
}

const clearErrorMessage = dispatch => {
  return () => dispatch({type: 'clearErrorMessage'});
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await userDataApi.post('/Signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            navigate('PatientProfile');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with Signup'});
        }
    };
};

const getUserInfo = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            const userInfo = await userDataApi.get('/userdata', { headers: { 'Authorization': `Bearer ${token}` }});
            dispatch({type: 'userInfo', payload: userInfo.data});
        }
        else{
            dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const postUserInfo = (dispatch) => {
    return async ({firstName, lastName, gender, address, timeStamp, age, phoneNumber}) => {
        const token = await AsyncStorage.getItem('token');
        const data = {'firstName': firstName,
            'lastName': lastName,
            'gender': gender,
            'address': address,
            'timeStamp': timeStamp,
            'age': age,
            'phoneNumber': phoneNumber}
        if(token){
            await userDataApi.post('/userdata',  data, { headers: { 'Authorization': `Bearer ${token}`}})
        }
        else{
            dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await userDataApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('PatientProfile');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with Signin'})
        }
    }
}

const signout = (dispatch) => async() => {
   await AsyncStorage.removeItem('token');
   dispatch({type: 'signout'});
   navigate('Login')
}


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage, tryLocalSignin, signout, getUserInfo, postUserInfo},
    {token: null, errorMessage: '', userInfo: {}}
=======
import React from 'react';
import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import userDataApi from "../api/userDataApi";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error': return {...state, errorMessage: action.payload};
        case 'signup': return {token: action.payload, errorMessage: ''};
        case 'signin': return {token: action.payload, errorMessage: ''};
        case 'clearErrorMessage': return {...state, errorMessage: ''};
        case 'signout': return {token: null, errorMessage: ''}
        case 'userInfo': return {...state, userInfo: action.payload}
        default: return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signup', payload: token});
        navigate('PatientProfile');
    }
    else{
        navigate('Login');
    }
}

const clearErrorMessage = dispatch => {
  return () => dispatch({type: 'clearErrorMessage'});
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try{
            const response = await userDataApi.post('/Signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            navigate('PatientProfile');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with Signup'});
        }
    };
};

const getUserInfo = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            const userInfo = await userDataApi.get('/userdata', { headers: { 'Authorization': `Bearer ${token}` }});
            dispatch({type: 'userInfo', payload: userInfo.data});
        }
        else{
            dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const postUserInfo = (dispatch) => {
    return async ({firstName, lastName, gender, address, timeStamp, age, phoneNumber}) => {
        const token = await AsyncStorage.getItem('token');
        const data = {'firstName': firstName,
            'lastName': lastName,
            'gender': gender,
            'address': address,
            'timeStamp': timeStamp,
            'age': age,
            'phoneNumber': phoneNumber}
        if(token){
            await userDataApi.post('/userdata',  data, { headers: { 'Authorization': `Bearer ${token}`}})
        }
        else{
            dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await userDataApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('PatientProfile');
        }catch (err){
            dispatch({type: 'add_error', payload: 'Something went wrong with Signin'})
        }
    }
}

const signout = (dispatch) => async() => {
   await AsyncStorage.removeItem('token');
   dispatch({type: 'signout'});
   navigate('Login')
}


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, clearErrorMessage, tryLocalSignin, signout, getUserInfo, postUserInfo},
    {token: null, errorMessage: '', userInfo: {}}
>>>>>>> aab1831a5b863a1c5e70d6660abea48745c6aa79
    );