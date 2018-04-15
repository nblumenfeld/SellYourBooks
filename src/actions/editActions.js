import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    POSTS_FETCH_SUCCESS,
    FETCH_USER,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    LOGOUT_SUCCESS,
    PASSWORD_RESET_SENT
    
} from './types';

export const postsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/posts`).on('value',snapshot => {
            dispatch({ type: POSTS_FETCH_SUCCESS, payload: snapshot.val() })
        });
    }
};

export const fetchUser = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}`)
        .on('value', snapshot => {
            dispatch({type:FETCH_USER, payload: snapshot.val()});
        });
    ;}
};

export const updateUser = ( { prop, value } ) => {
    return {
        type: UPDATE_USER,
        payload: { prop, value }
    };
};

export const userSave = ( { email,password, firstName, lastName } ) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        currentUser.updateEmail(email)
        .then(() => {
            firebase.database().ref(`/users/${currentUser.uid}`)
            .update({ email, firstName, lastName })
            .then(() =>{
                dispatch({type:UPDATE_USER_SUCCESS});
                Actions.pop();
            });
        });
    };
};

export const resetPassword = () => {
    const {currentUser} = firebase.auth();
    return(dispatch) => {
        firebase.auth().sendPasswordResetEmail(currentUser.email).then(() => {
            dispatch({type:PASSWORD_RESET_SENT});
        });
    }
}

export const logout = () =>{
    return(dispatch) => {
        firebase.auth().signOut()
        .then(() => logoutSuccess(dispatch));
    };
}

const logoutSuccess = (dispatch) => {
    dispatch({
        type:LOGOUT_SUCCESS
    });
    Actions.auth();
}