import * as Types from './user.types';

export const setCurrentUser = (user) => ({
	type: Types.SET_USER,
	payload: user,
});
