export const reset = ()=>{
	return (dispatch)=>{
		dispatch({
			type:"RESET",
		})
	}
}

export const set = (data)=>{
	return (dispatch)=>{
		dispatch({
			type:"SET",
			payload:data
		})
	}
}