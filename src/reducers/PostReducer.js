import {
    BOOK_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    title:'',
    author:'',
    edition:'',
    condition:'',
    price:'',
    picture:'',
    notes:''
};

export default (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case BOOK_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
         return state;
    }
};