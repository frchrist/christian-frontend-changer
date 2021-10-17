export const loading = (data) => {
	return (dispatch) => {
		dispatch({
			type: "LOGIN_LOADING",
		});
	};
};

export const failed = (errors) => {
	return (dispatch) => {
		dispatch({
			type: "LOGIN_FAILED",
			payload: errors,
		});
	};
};
export const success = () => {
	return (dispatch) => {
		dispatch({
			type: "SUCCESS",
		});
	};
};
