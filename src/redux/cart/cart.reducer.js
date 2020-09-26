import * as Types from './cart.types';

const INITIAL_STATE = {
	hidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.TOGGLE:
			return {
				...state,
				hidden: !state.hidden,
			};
		case Types.CLOSE_CART_DROPDOWN:
			return {
				...state,
				hidden: true,
			};
		case Types.OPEN_CART_DROPDOWN:
			return {
				...state,
				hidden: false,
			};
		default:
			return state;
	}
};

export default cartReducer;
