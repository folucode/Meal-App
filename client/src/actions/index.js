import history from '../history';
import {
	SIGN_IN,
	SIGN_OUT,
	FETCH_RESTAURANT,
	FETCH_RESTAURANTS,
	CREATE_RESTAURANT,
	EDIT_RESTAURANT,
	DELETE_RESTAURANT,
} from './types';
import restaurants from '../apis/restaurants';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};

export const createRestaurant = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;

	const response = await restaurants.post('/restaurants', {
		...formValues,
		userId,
	});

	dispatch({ type: CREATE_RESTAURANT, payload: response.data });

	history.push('/');
};

export const fetchRestaurants = () => async (dispatch) => {
	const response = await restaurants.get('/restaurants');

	dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};

export const fetchRestaurant = (id) => async (dispatch) => {
	const response = await restaurants.get(`/restaurants/${id}`);

	dispatch({ type: FETCH_RESTAURANT, payload: response.data });
};

export const editRestaurant = (id, formValues) => async (dispatch) => {
	const response = await restaurants.patch(`/restaurants/${id}`, formValues);

	dispatch({ type: EDIT_RESTAURANT, payload: response });
};

export const deleteRestaurant = (id) => async (dispatch) => {
	await restaurants.delete(`/streams/${id}`);

	dispatch({ type: DELETE_RESTAURANT, payload: id });
};
