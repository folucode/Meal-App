import { SIGN_IN, SIGN_OUT, FETCH_RESTURANT, FETCH_RESTURANTS, CREATE_RESTURANT, EDIT_RESTURANT, DELETE_RESTURANT } from './types';
import resturants from '../apis/resturants'



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

	/* make the network request to the resturats api for creating a new resturant */
	const response =  await resturants.post('/resturants', {...formValues, userId})

	/* dispatch the type and payload to redux state */
	dispatch({ type: CREATE_RESTURANT, payload: response.data})

	// log this to the cosole if it works
	console.log('worked :>> ');
}