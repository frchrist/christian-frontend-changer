const init = {
	//running or not
	loading:false,
	//fields errors
	errors:{},
	//username, email
}

export default function reducer(state=init, action){
	switch(action.type){
		case "LOADING":
			return {...state, loading:true}
		case "FAILED":
			return {...state, loggedin:false, loading:false, errors:action.payload}
		default:
			return state
	}
}