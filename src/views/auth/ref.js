import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { REGISTER } from "../../constant/routes";
export default function Ref() {
	const _h = useHistory();
	const { username } = useParams();
	localStorage.setItem("r_user", username);
	_h.push({ REGISTER });

	return <div></div>;
}
