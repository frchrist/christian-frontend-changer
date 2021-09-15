const init = {
	token: "",
	uidb64: "",
	is_valid: false,
};

export default function reducer(state = init, action) {
	switch (action.type) {
		case "SETTOKEN":
			return { ...state, token: action.payload.token, uidb64: action.payload.uidb64 };
		case "VALIDDATA":
			return { ...state, is_valid: true };
		default:
			return state;
	}
}
