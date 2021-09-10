const init = {
	//running or not
	loading:false,
	//success or not
	registed:false,
	sponsor:"",
	//fields errors
	errors:{},
	//username, email
	userdata:{}
}

export default function reducer(state=init, action){
	switch(action.type){
		case "LOADING":
			return {...state, loading:true}
		case "SPONSOR":
			return {...state, sponsor:action.payload}
		case "REGISTED":
			return {...state, registed:true, loading:false, userdata:action.payload, errors:{}}
		case "FAILED":
			return {...state, registed:false, loading:false, errors:action.payload, userdata:{}}
		default:
			return state
	}
}