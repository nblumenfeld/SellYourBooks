import firebase from 'firebase';
import {
    BOOKS_FETCH_SUCCESS
} from './types';

export const booksFetch = ({search,type}) => {
    const { currentUser } = firebase.auth();
    if(search == undefined){
        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/school`).on('value',snapshot => {
                let userSchool = snapshot.val();
                firebase.database().ref(`/Schools/${userSchool}/Posts`)
                .on('value', snapshot => {
                    dispatch({ type: BOOKS_FETCH_SUCCESS, payload: snapshot.val() })
                });
            });
        }
    }
    else{
        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/school`).on('value',snapshot => {
                let userSchool = snapshot.val();
                firebase.database().ref(`/Schools/${userSchool}/Posts`)
                .orderByChild(type)
                .startAt(search)
                .endAt(search+"\uf8ff")
                .on('value', snapshot => {
                    dispatch({ type: BOOKS_FETCH_SUCCESS, payload: snapshot.val() })
                });
            });
        }
    }
}