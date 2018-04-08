import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    UPDATE_USER
 } from './types';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email,password}) => {
    return (dispatch) => {
        dispatch({type:LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch(error =>{
                loginUserFail(dispatch, 'Invalid Email or Password' );
            }); 
    };
};

export const fetchUser = () => {
    const currentUser = firebase.auth();

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
    if(email){
        return (dispatch) => {
            updateUserWithEmailAndPassword(dispatch,email, password, firstName,lastName);
        };
    }
    else {
        return (dispatch) => {
            updateUserWithoutEmail(dispatch,firstName,lastName);
        }
    }
};

export const logout = () =>{
    return(dispatch) => {
        firebase.auth().signOut()
        .then(() => logoutSuccess(dispatch))
        .catch(() => logoutFail(dispatch));
    };
}


const loginUserFail = (dispatch, error) => {
    dispatch({ 
        type: LOGIN_USER_FAIL, 
        payload: error
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const updateUserWithEmailAndPassword = (dispatch, email, firstName, lastName)  =>{
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        currentUser.updateEmail(email)
        .then(() => {
            firebase.database().ref(`/users/${currentUser.uid}`)
            .set({ email, firstName, lastName })
            .then(() =>{
                dispatch({type:UPDATE_USER_SUCCESS});
                Actions.pop();
            });
        })
        .catch(() => dispatch({type:UPDATE_USER_FAIL}));
    };
};

updateUserWithoutEmail = (dispatch,firstName,lastName) => {
    return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}`)
            .set({ firstName, lastName })
            .then(() =>{
                dispatch({type:UPDATE_USER_SUCCESS});
                Actions.pop();
            });
    };
};

const logoutSuccess = (dispatch) => {
    dispatch({
        type:LOGOUT_SUCCESS
    });
    Actions.root();
}