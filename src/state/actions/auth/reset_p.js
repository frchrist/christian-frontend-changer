export const settoken = (data) => {
	return (dispatch) => {
		dispatch({
			type: "SETTOKEN",
			payload: data,
		});
	};
};
export const datavalid = () => {
	return (dispatch) => {
		dispatch({
			type: "VALIDDATA",
		});
	};
};
