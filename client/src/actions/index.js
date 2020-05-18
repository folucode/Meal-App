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

/* 
	This function is meant to create a new resturant by using the async await method through axios to talk to the api-server

	redux-thunk helps with making network requests in the action creator

	formValues is an object that contains the entries from the form
*/

export const createResturant = (formValues) => async (dispatch, getState) => {
	/* get the userId from the auth instance provided by Google 0Auth and was stored in redux store using default getState argument provided automatically to reducers by redux */

	const { userId } = getState().auth;

	/* make the network request to the resturants api for creating a new resturant */

	const response = await resturants.post('/resturants', {
		...formValues,
		userId,
	});

	/* dispatch the type and payload to redux state */

	dispatch({ type: CREATE_RESTURANT, payload: response.data });
};

/* This function is meant to fetch all the list of resturants that are currently in the db by making a get request to the backend server through axios

@return Array of Objects containing the list of resturants

*/

export const fetchResturants = () => async (dispatch) => {
	/* making the GET request to the api route '/streams' */

	const response = await resturants.get('/resturants');

	/* dispatch the type and payload to redux store */

	dispatch({ type: FETCH_RESTURANTS, payload: response.data });
};

/* This function is meant to fetch a single resturant from the db, and it uses the id passed into it to determine which resturant to retrun */

export const fetchResturant = (id) => async (dispatch) => {
	/* make the network request to get the particular resturant for the backend server */

	const response = await resturants.get(`/resturants/${id}`);

	/* dispatch the action to the redux store */

	dispatch({ type: FETCH_RESTURANT, payload: response.data });
};

/* This function is meant to make edit changes to a particular resturant of which its id is provided */

export const editResturant = (id, formValues) => async (dispatch) => {
	/* make the network request using PATCH so as to only replace the values that were altered in the form*/

	const response = await resturants.patch(`/resturants/${id}`, formValues);

	/* dispatch the action to the redux store */

	dispatch({ type: EDIT_RESTURANT, payload: response });
};

/* This function is meant to delete a resturant and that is determined by the id that was passed in to the function */

export const deleteResturant = (id) => async (dispatch) => {
	/* make network request to the api */

	await resturants.delete(`/streams/${id}`);

	/* dispatch the action */

	dispatch({ type: DELETE_RESTURANT, payload: id });
};
