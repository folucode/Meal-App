import _ from 'lodash';
import {
	FETCH_RESTAURANT,
	FETCH_RESTAURANTS,
	CREATE_RESTAURANT,
	EDIT_RESTAURANT,
	DELETE_RESTAURANT,
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_RESTAURANTS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_RESTAURANT:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_RESTAURANT:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_RESTAURANT:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_RESTAURANT:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
