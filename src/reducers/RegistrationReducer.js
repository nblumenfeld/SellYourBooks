import {
    UPDATE_REGISTRATION_FORM, 
    REGISTER_USER,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    school:'Westminster',
    loading:false,
    error:''
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_REGISTRATION_FORM:
            return { ...state, [action.payload.prop]:action.payload.value };
        case REGISTER_USER:
            return { ...state, loading: true, error:'' };
        case REGISTER_USER_SUCCESS:
            return { ...state, error: action.payload, password: '', loading: false };
        case REGISTER_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        default:
            return state;
    }
};