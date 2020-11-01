import * as Types from './cart.types';
import { addItems, clearItem, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
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
		case Types.ADD_ITEM:
			return {
				...state,
				cartItems: addItems(state.cartItems, action.payload),
			};
		case Types.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case Types.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: clearItem(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
