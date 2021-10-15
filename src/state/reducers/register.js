const init = {
	//running or not
	running: false,
	//success or not
	registed: false,
	sponsor: "",
	//fields errors
	errors: {},
	//username, email
	userdata: {},
};

export default function reducer(state = init, action) {
	switch (action.type) {
		case "REGISTER_LOADING":
			return { ...state, running: true };
		case "SPONSOR":
			return { ...state, sponsor: action.payload };
		case "REGISTED":
			return { ...state, registed: true, running: false, userdata: action.payload, errors: {} };
		case "REGISTER_FAILED":
			return { ...state, registed: false, running: false, errors: action.payload, userdata: {} };
		default:
			return state;
	}
}
