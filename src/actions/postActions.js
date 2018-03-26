import firebase from 'firebase';
import { 
    BOOK_UPDATE 
} from './types';

export const bookUpdate = ( { prop, value } ) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};

export const bookCreate = ( { title, author, edition, condition, price, picture, notes }) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/posts`)
        .push({ title, author, edition, condition, price, picture, notes });
    //copy the newly created post to a post section in school (after user is connected to school) for faster searching
};