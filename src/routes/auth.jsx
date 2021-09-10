import { Switch, Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux"

import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Emailverification from "../views/auth/verified-email";
import Resetpassword from "../views/auth/reset-password";
import Resetpassworddone from "../views/auth/reset-password-done";
import Resetpasswordcomplete from "../views/auth/reset-password-complete";
import Factor2auth from "../views/auth/factor2auth";
import {REGISTER, LOGIN,FORGOT_PASSWORD,FORGOT_PASSWORD_DONE,
	EMAIL_VERIFICATION,FACTOR2AUTH, DASHBORD, FORGOT_PASSWORD_COMPLETE} from "../constant/routes"
//decodé et le mettre dans le state de registration





function AuthRoutes() {
	const {is_authenticated} = useSelector(state=>state.auth)
	if(is_authenticated){
		return <Redirect to={DASHBORD} />
	}

	return (
		<div className="auth">
				<Switch>
					<Route path={LOGIN} exact component={Login} />
					<Route path={REGISTER}  exact component={Register} />
					<Route path={EMAIL_VERIFICATION}  exact component={Emailverification} />
					<Route path={FORGOT_PASSWORD}  exact component={Resetpassword} />
					<Route path={FORGOT_PASSWORD_DONE}  exact component={Resetpassworddone} />
					<Route path={FORGOT_PASSWORD_COMPLETE}  exact component={Resetpasswordcomplete} />
					<Route path={FACTOR2AUTH}  exact component={Factor2auth} />
					<Redirect from="/auth" to={LOGIN} />
					
				</Switch>
		</div>
	);
}

export default AuthRoutes;
