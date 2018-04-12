import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SearchReducer from './SearchReducer';
import PostReducer from './PostReducer';
import RegistrationReducer from './RegistrationReducer';
import EditReducer from './EditReducer';
import AccountReducer from './AccountReducer';

//This combine reducers is where all the different parts of state come from
export default combineReducers({
    auth: AuthReducer,
    post: PostReducer,
    searchRed: SearchReducer,
    register: RegistrationReducer,
    edit: EditReducer,
    account: AccountReducer
});