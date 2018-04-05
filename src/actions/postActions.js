import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    BOOK_UPDATE,
    BOOK_CREATE,
    BOOK_SAVE_SUCCESS
} from './types';

export const bookUpdate = ( { prop, value } ) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};

export const bookCreate = ( { title, author, edition, condition, price, picture, notes }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/posts`)
    .push({ title, author, edition, condition, price, picture, notes })
    .then((userPostReference) =>{
        firebase.database().ref(`/users/${currentUser.uid}/school`).on('value',snapshot => {
            let userSchool = snapshot.val();
            firebase.database().ref(`/Schools/${userSchool}/Posts`)
            .push({ refId:userPostReference.key, title, author, edition, condition, price, picture, notes })
            .then((communalPostReference) => {
                firebase.database().ref(`/users/${currentUser.uid}/posts/${userPostReference.key}`)
                .set({ comRefId:communalPostReference.key, title, author, edition, condition, price, picture, notes })
                dispatch({type:BOOK_CREATE})
                Actions.pop();
                });
            });
        });
    };
    
    //copy the newly created post to a post section in school (after user is connected to school) for faster searching
};

export const bookSave = ( { title, author, edition, condition, price, picture, notes, communalPostId, refId } ) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/posts/${refId}`)
        .set({ title, author, edition, condition, price, picture, notes })
        .then((reference) =>{
            firebase.database().ref(`/users/${currentUser.uid}/school`).on('value',snapshot => {
                let userSchool = snapshot.val();
                firebase.database().ref(`/Schools/${userSchool}/Posts/${communalPostId}`)
                .set({ refId, title, author, edition, condition, price, picture, notes })
                .then(() => {
                    dispatch({type:BOOK_SAVE_SUCCESS});
                    Actions.pop();
                    });
                });
            });
        };
};

export const bookDelete = ({ comRefId, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/posts/${uid}`)
        .remove()
        .then(() => {
            firebase.database().ref(`/users/${currentUser.uid}/school`).on('value',snapshot => {
                let userSchool = snapshot.val();
                firebase.database().ref(`/Schools/${userSchool}/Posts/${comRefId}`)
                .remove()
                .then(() => {
                    Actions.pop();
                    });
                });
            });
        };
}

