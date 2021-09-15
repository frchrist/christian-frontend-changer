import { useEffect } from "react";
import { reset_password_done } from "../../helpers/requests";
import { useParams, useHistory } from "react-router-dom";
import * as messageactions from "../../state/actions/message";
import * as resetactions from "../../state/actions/reset_p";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function Restpassword() {
	useEffect(() => {
		document.title = "redirect ..";
	}, []);
	const { uidb64, token } = useParams();
	const dispatch = useDispatch();
	const { datavalid, settoken } = bindActionCreators(resetactions, dispatch);
	const _a = bindActionCreators(messageactions, dispatch);
	const _h = useHistory();
	reset_password_done(token, uidb64, datavalid, settoken, _a, _h);

	return <div>loading ...</div>;
}
