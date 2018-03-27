import firebase from 'firebase';
import {
    BOOKS_FETCH_SUCCESS
} from './types';

export const booksFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/posts`)
            .on('value', snapshot => {
                // console.log(snapshot.val());
                dispatch({ type: BOOKS_FETCH_SUCCESS, payload: snapshot.val() })
            });
    }
}