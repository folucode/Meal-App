import history from '../../history';
import {
	FETCH_RESTAURANT,
	FETCH_RESTAURANTS,
	CREATE_RESTAURANT,
	EDIT_RESTAURANT,
	DELETE_RESTAURANT,
} from './types';
import db from '../../apis/db';

export const createRestaurant = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;

	const response = await db.post('/restaurants', {
		...formValues,
		userId,
	});

	dispatch({ type: CREATE_RESTAURANT, payload: response.data });

	history.push('/');
};

export const fetchRestaurants = () => async (dispatch) => {
	const response = await db.get('/restaurants');

	dispatch({ type: FETCH_RESTAURANTS, payload: response.data });
};

export const fetchRestaurant = (id) => async (dispatch) => {
	const response = await db.get(`/restaurants/${id}`);

	dispatch({ type: FETCH_RESTAURANT, payload: response.data });
};

export const editRestaurant = (id, formValues) => async (dispatch) => {
	const response = await db.patch(`/restaurants/${id}`, formValues);

	dispatch({ type: EDIT_RESTAURANT, payload: response });
};

export const deleteRestaurant = (id) => async (dispatch) => {
	await db.delete(`/streams/${id}`);

	dispatch({ type: DELETE_RESTAURANT, payload: id });
};
