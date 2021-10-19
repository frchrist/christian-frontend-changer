import { useEffect } from "react";
import { reset_password_done_request } from "../../helpers/requests";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Isauthloader } from "../../components/simple/loaders";
export default function Restpassword() {
	useEffect(() => {
		document.title = "redirect ..";
	}, []);
	const { uidb64, token } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const params = {
		data: {
			uidb64,
			token,
		},
		history,
		dispatch,
	};

	reset_password_done_request(params);

	return <Isauthloader />;
}
