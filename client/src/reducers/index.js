import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import resturantReducer from './resturantReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	resturants: resturantReducer
});
