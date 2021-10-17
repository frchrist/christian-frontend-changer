import { useEffect } from "react";
import { reset_password_done_request } from "../../helpers/requests";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../state/actions";
export default function Restpassword() {
	useEffect(() => {
		document.title = "redirect ..";
	}, []);
	const { message_actions, reset_password_actions } = actions;
	const { uidb64, token } = useParams();
	const dispatch = useDispatch();
	const { datavalid, settoken } = bindActionCreators(reset_password_actions, dispatch);
	const _a = bindActionCreators(message_actions, dispatch);
	const _h = useHistory();
	reset_password_done_request(token, uidb64, datavalid, settoken, _a, _h);

	return <div>loading ...</div>;
}
