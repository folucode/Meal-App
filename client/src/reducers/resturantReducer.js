import _ from 'lodash';
import {
	FETCH_RESTURANT,
	FETCH_RESTURANTS,
	CREATE_RESTURANT,
	EDIT_RESTURANT,
	DELETE_RESTURANT,
} from '../actions/types';

/* This is the reducer that manages all the actions of the resturants */

/* The args for a reducer is the state first then followed by the action to be performed */

/* The _.mapKeys function which is provided by the lodash library is used the use the ids of each returant as the key for each payload (object containing the resturant's info) */

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_RESTURANTS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_RESTURANT:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_RESTURANT:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_RESTURANT:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_RESTURANT:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
