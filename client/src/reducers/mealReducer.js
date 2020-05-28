import _ from 'lodash';
import {
	FETCH_MEAL,
	FETCH_MEALS,
	EDIT_MEAL,
	DELETE_MEAL,
	CREATE_MEAL,
} from '../actions/meals/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_MEALS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_MEAL:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_MEAL:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_MEAL:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_MEAL:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
