const init = {
	load: false,
	code: "",
};
const reducer = (state = init, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, load: true };
		case "FAILED":
			return { ...state, load: false };
		case "SUCCESS":
			return { ...state, load: false, code: "" };
		case "SETCODE":
			return { ...state, code: action.payload };
		default:
			return state;
	}
};

export default reducer;
