import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    BOOK_UPDATE,
    BOOK_CREATE
} from './types';

export const bookUpdate = ( { prop, value } ) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};

export const bookCreate = ( { title, author, edition, condition, price, picture, notes }) => {
    const { currentUser } = firebase.auth();
    const school = null;
    const post = null;
    const postId = null;

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/posts`)
        .push({ title, author, edition, condition, price, picture, notes })
        .then(() =>{
            dispatch({type:BOOK_CREATE})
            Actions.pop();
        });
    };
    
    //copy the newly created post to a post section in school (after user is connected to school) for faster searching
};

