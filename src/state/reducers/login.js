const init = {
	//running or not
	loading:false,
	//success or not
	loggedin:false,
	//fields errors
	errors:{},
	//username, email
	userdata:{}
}

export default function reducer(state=init, action){
	switch(action.type){
		case "LOADING":
			return {...state, loading:true}
		case "LOGGED":
			return {...state, loggedin:true, loading:false, userdata:action.payload, errors:{}}
		case "FAILED":
			return {...state, loggedin:false, loading:false, errors:action.payload, userdata:{}}
		default:
			return state
	}
}