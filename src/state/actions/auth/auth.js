export const authenticate = (data) => {
	return (dispatch) => {
		dispatch({
			type: "AUTHENTICATED",
			payload: data,
		});
	};
};

export const logout = () => {
	return (dispatch) => {
		dispatch({
			type: "LOGOUT",
		});
	};
};
