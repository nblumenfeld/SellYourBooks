import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_FAIL_INVALID_EMAIL_OR_PASSWORD,
    LOGIN_USER,
    LOGOUT_SUCCESS,
    FETCH_USER,
    UPDATE_USER
} from '../actions/types';

const INITIAL_STATE = { 
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    user: null,
    error:'',
    loading: false
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error:'' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        case UPDATE_USER:
            return { ...state, [action.payload.prop]: action.payload.value };
        case FETCH_USER:
            console.log(action.payload);
            // return action.payload;
        case LOGOUT_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
        
    }
};