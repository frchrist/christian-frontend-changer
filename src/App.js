import { Switch, Route, BrowserRouter , Redirect} from "react-router-dom"
//decodé et le mettre dans le state de registration
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./state/actions/auth";
import {useEffect, lazy, Suspense} from "react"
import "./App.css";
import Home from "./views/home";
import {Faq} from "./views/faq";
import {Isauthloader} from "./components/simple/loaders"
import Handle404 from "./views/errors/4O4"
import Ref from "./views/auth/ref";
import refresh from "./helpers/requests/refresh";

const AuthRoutes = lazy(()=> import("./routes/auth"))
const UserRoutes = lazy(()=> import("./routes/user"))



function App() {
	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();
	const auth_action = bindActionCreators(actions, dispatch);
	useEffect(()=>{
		if (auth.is_auth === undefined) {
			refresh(auth_action.authenticate, auth_action.logout);

		}
	})


	useEffect(()=>{
		let timer = setInterval(() => {
			
			if (auth.is_auth){
				refresh(auth_action.authenticate, auth_action.logout);
			}
				
		}, 1000*60*5);
		return function(){
			clearInterval(timer)
		}
	})
	
	if(auth.is_auth === undefined){
		return <Isauthloader/>
	}

	
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/faq" exact component={Faq} />
					<Route path="/dashbord"> 
						<Suspense fallback={<Isauthloader/>}>
						{auth.access ? 
								<UserRoutes/>
								:  
								<Redirect to={"/auth"}/>
								}
						</Suspense>
					</Route>
					<Route path="/auth" >
							<Suspense fallback={<Isauthloader/>}>
						{auth.access ? 
							<Redirect to={"/dashbord"}/> : 
							<AuthRoutes/> 
							}
					</Suspense>
					</Route> 
					<Route path="/ref@:username"  exact component={Ref} />
					<Route path="*"  component={Handle404} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
