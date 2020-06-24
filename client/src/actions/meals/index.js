import history from '../../history';
import {
	FETCH_MEAL,
	FETCH_MEALS,
	EDIT_MEAL,
	DELETE_MEAL,
	CREATE_MEAL,
} from './types';

import db from '../../apis/db';

export const createMeal = (restaurantId, formValues) => async (
	dispatch,
	getState,
) => {
	const { userId } = getState().auth;

	const response = await db.post('/meals', {
		...formValues,
		userId,
		restaurantId,
	});

	dispatch({ type: CREATE_MEAL, payload: response.data });

	history.push(`/restaurant/show/${restaurantId}`);
};

export const fetchMeals = () => async (dispatch) => {
	const response = await db.get('/meals');

	dispatch({ type: FETCH_MEALS, payload: response.data });
};

export const fetchMeal = (id) => async (dispatch) => {
	const response = await db.get(`/meals/${id}`);
};

export const editMeal = (id, formValues) => async (dispatch) => {
	const response = await db.patch(`/meals/${id}`);
};

export const deleteMeal = (id) => async (dispatch) => {
	await db.delete(`/meals/${id}`);
};
