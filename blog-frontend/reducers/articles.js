import { CREATE_ACTICLE, DELETE_ACTICLE, EDIT_ACTICLE, UPDATE_ACTICLE } from '../constants/ActionTypes';

const initialState = [{
	text: 'Use Redux'
}];

export default function articles(state = initialState, action) {
	switch (action.type) {
		case CREATE_ACTICLE: 
			return state;
		case DELETE_ACTICLE:
			return state;
		case EDIT_ACTICLE:
			return state;
		case UPDATE_ACTICLE:
			return state;
		default: 
			return state;
	}
}