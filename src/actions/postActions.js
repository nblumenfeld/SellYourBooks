import { 
    BOOK_UPDATE 
} from './types';

export const bookUpdate = ( { prop, value } ) => {
    return {
        type: BOOK_UPDATE,
        payload: { prop, value }
    };
};