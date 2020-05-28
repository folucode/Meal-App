import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import restaurantReducer from './restaurantReducer';
import mealReducer from './mealReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	restaurants: restaurantReducer,
	meals: mealReducer,
});
