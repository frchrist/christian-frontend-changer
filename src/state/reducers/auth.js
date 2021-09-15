const init = {
	//running or not
	username: "",
	email: "",
	access: "",
	is_auth: undefined,
};

export default function reducer(state = init, action) {
	switch (action.type) {
		case "AUTHENTICATED":
			return { ...state, username: action.payload.username,is_auth:true, access: action.payload.access, email: action.payload.email };
		case "LOGOUT":
			return { ...state, username: "", access: "", email: "",is_auth:false };

		default:
			return state;
	}
}
