import { Fragment } from "react";

import { Link, useHistory } from "react-router-dom";
import logout_request from "../../helpers/requests/logout";

import FlashMessage from "../../components/messages/message";

const Dashboard = ({ auth_state, auth_actions }) => {
	const history = useHistory();

	return (
		<div className="flex flex-col bg-gray-100">
			<div>
				<FlashMessage />
				hello {auth_state.username} your access is {auth_state.access}
			</div>
		</div>
	);
};
export default Dashboard;
