import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
//decodé et le mettre dans le state de registration
import { lazy, Suspense } from "react";
import "./App.css";
import Home from "./views/home";
import { Faq } from "./views/faq";
import { Isauthloader } from "./components/simple/loaders";
import Handle404 from "./views/errors/4O4";
import Ref from "./views/auth/ref";
import { useSelector } from "react-redux";

const AuthRoutes = lazy(() => import("./routes/auth"));
const UserRoutes = lazy(() => import("./routes/user"));

function App() {
	const auth = useSelector((s) => s.user);
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/faq" exact component={Faq} />
					<Route path="/dashbord">
						<Suspense fallback={<Isauthloader />}>{auth.access ? <UserRoutes /> : <Redirect to={"/auth"} />}</Suspense>
					</Route>
					<Route path="/auth">
						<Suspense fallback={<Isauthloader />}>{auth.access ? <Redirect to={"/dashbord"} /> : <AuthRoutes />}</Suspense>
					</Route>
					<Route path="/ref@:username" exact component={Ref} />
					<Route path="*" component={Handle404} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
