import * as Actions from '../constants';

export const setCurrentUser = (user) => ({
	type: Actions.SET_USER,
	payload: user,
});
