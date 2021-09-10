import {useDispatch} from "react-redux"
import {bindActionCreators} from "redux"
import * as actions from "../../state/actions/register"
import {useHistory, useParams} from "react-router-dom";
export default function Ref(){
	const dispatch = useDispatch();
	const {set_sponsor} = bindActionCreators(actions,dispatch);
	const _h = useHistory();
	const {username}= useParams()
	set_sponsor(username)
	_h.push("/auth/client/new-client")

	return (
		<div></div>
		)
}