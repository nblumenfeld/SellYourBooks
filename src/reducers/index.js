import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostReducer from './PostReducer';

//This combine reducers is where all the different parts of state come from
export default combineReducers({
    auth: AuthReducer,
    post: PostReducer
});