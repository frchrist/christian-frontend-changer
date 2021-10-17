import { Switch, Route, Redirect } from "react-router-dom";

import { lazy, Suspense } from "react";

import { REGISTER, LOGIN, FORGOT_PASSWORD, FORGOT_PASSWORD_DONE, EMAIL_VERIFICATION, FACTOR2AUTH, FORGOT_PASSWORD_COMPLETE } from "../constant/routes";
//decodé et le mettre dans le state de registration
import { Authloader } from "../components/simple/loaders";
const Login = lazy(() => import("../views/auth/login"));
const Register = lazy(() => import("../views/auth/register"));
const Emailverification = lazy(() => import("../views/auth/verified-email"));
const Resetpassword = lazy(() => import("../views/auth/reset-password"));
const Resetpassworddone = lazy(() => import("../views/auth/reset-password-done"));
const Resetpasswordcomplete = lazy(() => import("../views/auth/reset-password-complete"));
const Factor2auth = lazy(() => import("../views/auth/factor2auth"));

function AuthRoutes() {
	return (
		<div className="auth mt-20">
			<Suspense fallback={<Authloader />}>
				<Switch>
					<Route path={LOGIN} exact>
						{" "}
						<Login />{" "}
					</Route>
					<Route path={REGISTER} exact>
						{" "}
						<Register />
					</Route>
					<Route path={EMAIL_VERIFICATION} exact component={Emailverification} />
					<Route path={FORGOT_PASSWORD} exact component={Resetpassword} />
					<Route path={FORGOT_PASSWORD_DONE} exact component={Resetpassworddone} />
					<Route path={FORGOT_PASSWORD_COMPLETE} exact component={Resetpasswordcomplete} />
					<Route path={FACTOR2AUTH} exact>
						<Factor2auth />{" "}
					</Route>
					<Redirect from="/auth" to={LOGIN} />
				</Switch>
			</Suspense>
		</div>
	);
}

export default AuthRoutes;
