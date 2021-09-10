const init = {
	//running or not
	is_authenticated:false,
}

export default function reducer(state=init, action){
	switch(action.type){
		case "AUTHENTICATED":
			return {...state, is_authenticated:true}
		case "LOGOUT":
			return {...state, is_authenticated:false}
		
		default:
			return state
	}
}