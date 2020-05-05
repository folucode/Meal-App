import { combineReducers } from 'redux';
import authReducer from '../actions/authReducer';

export default combineReducers({
	auth: authReducer,
});
