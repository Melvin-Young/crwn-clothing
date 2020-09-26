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
