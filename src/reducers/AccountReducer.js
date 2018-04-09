import {
    UPDATE_USER,
    FETCH_USER,
    LOGOUT_SUCCESS,
    UPDATE_USER_SUCCESS,
    PASSWORD_RESET_SENT
} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    error:''    
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, [action.payload.prop]: action.payload.value };
        case UPDATE_USER_SUCCESS:
            return INITIAL_STATE;
        case FETCH_USER:
            return { email: action.payload.email, firstName: action.payload.firstName, lastName: action.payload.lastName };
        case PASSWORD_RESET_SENT:
            return { ...state, error:'Password reset email sent'};
        case LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}