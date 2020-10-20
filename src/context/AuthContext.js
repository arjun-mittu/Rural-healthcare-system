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

const postUserInfo = (dispatch) => {
     return async ({firstName, lastName, age, phone, address, gender, bloodGroup, diabitic, highBloodPressure, currentlyUnderDiagnosis}, changeRegistrationStatus, userType, appointmentFees,
                   specialisation) =>{
        console.log(appointmentFees, specialisation);
        const token = await AsyncStorage.getItem('token');
        const data = JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            address: address,
            bloodGroup: bloodGroup,
            diabitic: diabitic,
            highBloodPressure: highBloodPressure,
            currentlyUnderDiagnosis: currentlyUnderDiagnosis,
            timeStamp: 1000,
            phoneNumber: phone,
            userType: userType,
            appointmentFees: appointmentFees,
            specialisation: specialisation
        })
        if(token){
            await userDataApi.post('/userdata', data, {
                headers: { 'Authorization': `Bearer ${token}`, 'content-type': 'application/json'},
            })
            changeRegistrationStatus(true);
        }
        else{
            console.log('Error');
                dispatch({type: 'add_error', payload: 'Can not load data at the moment'});
        }
    }
}

const signup = (dispatch) => {
    return async ({email, password}, changeTokenStatus) => {
        try{
            const response = await userDataApi.post('/Signup', {email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            changeTokenStatus(true);
            }catch (err){
                console.log(err);
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
    {token: null, errorMessage: '', userInfo: {}});
