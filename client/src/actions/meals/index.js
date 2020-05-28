import {
	FETCH_MEAL,
	FETCH_MEALS,
	EDIT_MEAL,
	DELETE_MEAL,
	CREATE_MEAL,
} from './types';

import db from '../../apis/db';

export const createMeal = (formValues) => async (dispatch, getState) => {
	const response = await db.post('/meals', {
		formValues,
	});
};

export const fetchMeals = () => async (dispatch) => {
	const respose = await db.get('/meals');
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
