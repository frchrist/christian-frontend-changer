import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import refresh from "../helpers/requests/refresh";
import { DASHBORD, LOGIN, EXCHANGE, SETTINGS } from "../constant/routes";

import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as actions from "../state/actions/auth";
//decodé et le mettre dans le state de registration
import Dashbord from "../views/user/dashbord";
import Settings from "../views/user/setting";
import Exchange from "../views/user/exchange";

function UserRoutes() {
	const dispatch = useDispatch();
	const auth_state = useSelector((state) => state.auth);
	const auth_actions = bindActionCreators(actions, dispatch);

	const auth_store = {
		auth_state,
		auth_actions,
	};

	return (
		<div className="user">
			<Switch>
				<Route path={DASHBORD} exact>
					{" "}
					<Dashbord {...auth_store} />{" "}
				</Route>
				<Route path={EXCHANGE} exact>
					<Exchange {...auth_store} />{" "}
				</Route>
				<Route path={SETTINGS} exact>
					<Settings {...auth_store} />{" "}
				</Route>

				<Redirect from="/dashbord" to={DASHBORD} />
			</Switch>
		</div>
	);
}

export default UserRoutes;
