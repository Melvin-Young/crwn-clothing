import * as Types from './cart.types';

export const toggleCartHidden = () => ({
	type: Types.TOGGLE,
});

export const openCartDropdown = () => ({
	type: Types.OPEN_CART_DROPDOWN,
});

export const hideCartDropdown = () => ({
	type: Types.CLOSE_CART_DROPDOWN,
});

export const addItem = (item) => ({
	type: Types.ADD_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: Types.REMOVE_ITEM,
	payload: item,
});

export const clearItemFromCart = (item) => ({
	type: Types.CLEAR_ITEM_FROM_CART,
	payload: item,
});
