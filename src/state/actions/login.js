
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