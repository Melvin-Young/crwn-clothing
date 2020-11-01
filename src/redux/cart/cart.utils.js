export const addItems = (cartItems, newItem) => {
	const itemExists = cartItems.find((cartItem) => cartItem.id === newItem.id);

	if (itemExists) {
		return cartItems.map((cartItem) =>
			cartItem.id === newItem.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...newItem, quantity: 1 }];
};

export const clearItem = (cartItems, removedItem) =>
	cartItems.filter((cartItem) => cartItem.id !== removedItem.id);

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
