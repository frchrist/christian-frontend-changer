import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import AuthRoutes from "./routes/auth"
import Handle404 from "./views/errors/4O4"
import Ref from "./views/auth/ref";



function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/auth"  component={AuthRoutes} />
					<Route path="/ref@:username"  exact component={Ref} />
					<Route path="*"  component={Handle404} />

				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
