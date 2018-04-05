import firebase from 'firebase';
import {
    BOOKS_FETCH_SUCCESS
} from './types';

export const booksFetch = () => {
    const { currentUser } = firebase.auth();

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