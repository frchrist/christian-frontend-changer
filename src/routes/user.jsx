import { Switch, Route, Redirect } from "react-router-dom";
import { DASHBORD, EXCHANGE, SETTINGS } from "../constant/routes";
//decodé et le mettre dans le state de registration
import Dashbord from "../views/user/dashbord";
import Settings from "../views/user/setting";
import Exchange from "../views/user/exchange";

function UserRoutes() {

	return (
		<div className="user">
			<Switch>
				<Route path={DASHBORD} exact>
					{" "}
					<Dashbord/>{" "}
				</Route>
				<Route path={EXCHANGE} exact>
					<Exchange  />{" "}
				</Route>
				<Route path={SETTINGS} exact>
					<Settings />{" "}
				</Route>

				<Redirect from="/dashbord" to={DASHBORD} />
			</Switch>
		</div>
	);
}

export default UserRoutes;
