import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    UPDATE_REGISTRATION_FORM,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
 } from './types';

export const updateRegistrationForm = ({ prop, value }) => {
    return {
        type: UPDATE_REGISTRATION_FORM,
        payload: { prop, value }
    }
};

export const registerUser = ({ email, password, firstName, lastName, school }) => {
    return (dispatch) => {
        dispatch({type:REGISTER_USER});
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user => {
            firebase.database().ref(`/users/${user.uid}`)
            .set({email,firstName,lastName,school});
            registerUserSuccess(dispatch,user);   
        })
        .catch(() => registerUserFail(dispatch)); 
    };
};

const registerUserFail = (dispatch, error) => {
    dispatch({ 
        type: REGISTER_USER_FAIL, 
        payload: error
    });
};

const registerUserSuccess = (dispatch, user) => {
    dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};