const init = {
	loading: false,
	code:"",
	
};
const reducer = (state=init, action) => {
	switch (action.type) {
		case "LOADING":
			return { ...state, loading: true };
		case "FAILED":
			return { ...state, loading: false };
		case "SUCCESS":
			return { ...state, loading: false };
		case "SETCODE":
			return { ...state, code:action.payload };
		default:
			return state
	}
};


export default reducer;