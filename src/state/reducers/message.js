const init = {
	show:false,
	messageData:{}
}

export default function reducer(state=init, action){
	switch(action.type){
		case "DISPLAY":
			return {...state, show:true, messageData:action.payload}
		case "HIDE":
			return {...state, show:false}
		
		default:
			return state
	}
}