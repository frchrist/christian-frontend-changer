export const registed = (data)=>{
	return (dispatch)=>{
		dispatch({
			type:"REGISTED",
			payload:data
		})
	}
}

export const set_sponsor = (username)=>{
	return (dispatch)=>{
		dispatch({
			type:"SPONSOR",
			payload:username
		})
	}
}



export const loading = (data)=>{
	return (dispatch)=>{
		dispatch({
			type:"LOADING",
		})
		
	}
}

export const failed = (errors)=>{
	return (dispatch)=>{
		dispatch({
			type:"FAILED",
			payload:errors
		})
	}
}