
export const process = () => {
	return (dispatch) => {
		dispatch({
			type: "LOADING",
		});
	};
};

export const setCode = (code) => {
	return (dispatch) => {
		dispatch({
			type: "SETCODE",
			payload:code
		});
	};
};

export const failed = () => {
	return (dispatch) => {
		dispatch({
			type: "FAILED",
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

