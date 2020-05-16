import { SIGN_IN, SIGN_OUT } from './types';


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
*/
export const createResturant = () => async (dispatch, getState) => {
	const { userId } = getState().auth;

	const response =  await 
}