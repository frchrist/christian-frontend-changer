import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import {authentication_actions} from "../../state/actions"
import {useHistory, useParams} from "react-router-dom";
import {REGISTER} from "../../constant/routes"
export default function Ref(){
	const dispatch = useDispatch();
	const {register_actions} = authentication_actions;
	const {set_sponsor} = bindActionCreators(register_actions,dispatch);
	const _h = useHistory();
	const {username}= useParams()
	set_sponsor(username)
	_h.push({REGISTER})

	return (
		<div></div>
		)
}
