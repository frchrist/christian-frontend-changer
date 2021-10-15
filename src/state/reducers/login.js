const init = {
	//running or not
	loading: false,
	//fields errors
	errors: {},
	//username, email
};

export default function reducer(state = init, action) {
	switch (action.type) {
		case "LOGIN_LOADING":
			return { ...state, loading: true };
		case "LOGIN_FAILED":
			return { ...state, errors: action.payload, loading: false };
		case "SUCCESS":
			return { ...state, loading: false };
		default:
			return state;
	}
}
