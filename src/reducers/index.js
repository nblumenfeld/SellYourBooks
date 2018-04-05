import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SearchReducer from './SearchReducer';
import PostReducer from './PostReducer';
import RegistrationReducer from './RegistrationReducer';
import EditReducer from './EditReducer';

//This combine reducers is where all the different parts of state come from
export default combineReducers({
    auth: AuthReducer,
    post: PostReducer,
    search: SearchReducer,
    register: RegistrationReducer,
    edit: EditReducer
});