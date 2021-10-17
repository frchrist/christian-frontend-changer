export const registed = (data) => {
	return (dispatch) => {
		dispatch({
			type: "REGISTED",
			payload: data,
		});
	};
};

export const set_sponsor = (username) => {
	return (dispatch) => {
		dispatch({
			type: "SPONSOR",
			payload: username,
		});
	};
};

export const loading = (data) => {
	return (dispatch) => {
		dispatch({
			type: "REGISTER_LOADING",
		});
	};
};

export const failed = (errors) => {
	return (dispatch) => {
		dispatch({
			type: "REGISTER_FAILED",
			payload: errors,
		});
	};
};
