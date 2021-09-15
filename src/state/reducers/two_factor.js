
const init = {
	email:"",
	password:''
}
const red = function(state=init,action){
	switch(action.type){
		case "SET":
			return {...state,email:action.payload.email, password:action.payload.password}
		case "RESET":
			return {...state,email:"",password:""}
		default:
			return state
	}

}
export default red;