import firebase from 'firebase';
import {
    POSTS_FETCH_SUCCESS
} from './types';

export const postsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/posts`).on('value',snapshot => {
            console.log(snapshot.val());
            dispatch({ type: POSTS_FETCH_SUCCESS, payload: snapshot.val() })
        });
    }
}