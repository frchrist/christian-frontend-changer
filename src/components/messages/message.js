import Info from "./info"
import Success from "./success"
import Warning from "./warning"
import {useSelector, useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../../state/actions/message"

function Message(tag, title,message){
	switch(tag){
		case "info":
			return  <Info tag={title} message={message} />
		case "success":
			return  <Success tag={title} message={message} />
		case "warning":
			return  <Warning tag={title} message={message} />
		default:
			return <Info tag={title} message={message} />
		}
}

export default function FlashMessage(){
	const {show, messageData} = useSelector(state=>state.message)
	const _d = useDispatch();
	const {hide} =  bindActionCreators(actions,_d);

	
	if(show){
		setTimeout(()=>{
			hide()
		}, 5000)
	}

	return <>
	 {show && Message(messageData.tag,messageData.title,messageData.message)}
	</>
}

