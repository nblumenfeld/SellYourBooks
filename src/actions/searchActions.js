import firebase from 'firebase';
import {
    BOOKS_FETCH_SUCCESS
} from './types';

export const booksFetch = ({search}) => {
    const { currentUser } = firebase.auth();
    if(search == ''){
        return (dispatch) => {
            firebase.database().ref(`/users/${currentUser.uid}/school`).on('value',snapshot => {
                let userSchool = snapshot.val();
                firebase.database().ref(`/Schools/${userSchool}/Posts`)
                .on('value', snapshot => {
                    // console.log(snapshot.val());
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
                .orderByChild('title')
                .startAt(search)
                .endAt(search+"\uf8ff")
                .on('value', snapshot => {
                    // console.log(snapshot.val());
                    dispatch({ type: BOOKS_FETCH_SUCCESS, payload: snapshot.val() })
                });
            });
        }
    }
}