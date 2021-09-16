import { Switch, Route, Redirect, useHistory } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import * as actions from "../state/actions/auth";
import * as messageactions from "../state/actions/message";
import * as register_actions from "../state/actions/register";
import * as twofactor_actions from "../state/actions/twofactor";
import * as login_actions from "../state/actions/login";
import { lazy, Suspense } from "react";

import { REGISTER, LOGIN, FORGOT_PASSWORD, FORGOT_PASSWORD_DONE, EMAIL_VERIFICATION, FACTOR2AUTH, FORGOT_PASSWORD_COMPLETE } from "../constant/routes";
//decodé et le mettre dans le state de registration
import {Authloader} from "../components/simple/loaders";
const Login = lazy(() => import("../views/auth/login"));
const Register = lazy(() => import("../views/auth/register"));
const Emailverification = lazy(() => import("../views/auth/verified-email"));
const Resetpassword = lazy(() => import("../views/auth/reset-password"));
const Resetpassworddone = lazy(() => import("../views/auth/reset-password-done"));
const Resetpasswordcomplete = lazy(() => import("../views/auth/reset-password-complete"));
const Factor2auth = lazy(() => import("../views/auth/factor2auth"));

function AuthRoutes() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { twofactordata } = useSelector((state) => state);
	const auth_action = bindActionCreators(actions, dispatch);
	const message_action = bindActionCreators(messageactions, dispatch);
	const register_action = bindActionCreators(register_actions, dispatch);
	const twofactor_action = bindActionCreators(twofactor_actions, dispatch);
	const login_action = bindActionCreators(login_actions, dispatch);
	

	const auth_store = {
		auth_action,
		message_action,
		history,
		register_action,
		twofactordata,
		twofactor_action,
		login_action,
	};

	return (
		<div className="auth">
			<Suspense fallback={<Authloader />}>
				<Switch>
					<Route path={LOGIN} exact>
						{" "}
						<Login {...auth_store} />{" "}
					</Route>
					<Route path={REGISTER} exact>
						{" "}
						<Register {...auth_store} />
					</Route>
					<Route path={EMAIL_VERIFICATION} exact component={Emailverification} />
					<Route path={FORGOT_PASSWORD} exact component={Resetpassword} />
					<Route path={FORGOT_PASSWORD_DONE} exact component={Resetpassworddone} />
					<Route path={FORGOT_PASSWORD_COMPLETE} exact component={Resetpasswordcomplete} />
					<Route path={FACTOR2AUTH} exact>
						<Factor2auth {...auth_store} />{" "}
					</Route>
					<Redirect from="/auth" to={LOGIN} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default AuthRoutes;
