export const showed = (data)=>{
	return (dispatch)=>{
		dispatch({
			type:"DISPLAY",
			payload:data
		})
	}
}

export const hide = ()=>{
	return (dispatch)=>{
		dispatch({
			type:"HIDE"
		})
	}
}
