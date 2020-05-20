import {
	SIGN_IN,
	SIGN_OUT,
	FETCH_RESTURANT,
	FETCH_RESTURANTS,
	CREATE_RESTURANT,
	EDIT_RESTURANT,
	DELETE_RESTURANT,
} from './types';
import resturants from '../apis/resturants';

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

export const createResturant = (formValues) => async (dispatch, getState) => {

	const { userId } = getState().auth;

	const response = await resturants.post('/resturants', {
		...formValues,
		userId,
	});

	dispatch({ type: CREATE_RESTURANT, payload: response.data });
};

export const fetchResturants = () => async (dispatch) => {

	const response = await resturants.get('/resturants');

	dispatch({ type: FETCH_RESTURANTS, payload: response.data });
};

export const fetchResturant = (id) => async (dispatch) => {

	const response = await resturants.get(`/resturants/${id}`);

	dispatch({ type: FETCH_RESTURANT, payload: response.data });
};

export const editResturant = (id, formValues) => async (dispatch) => {

	const response = await resturants.patch(`/resturants/${id}`, formValues);

	dispatch({ type: EDIT_RESTURANT, payload: response });
};

export const deleteResturant = (id) => async (dispatch) => {

	await resturants.delete(`/streams/${id}`);

	dispatch({ type: DELETE_RESTURANT, payload: id });
};
