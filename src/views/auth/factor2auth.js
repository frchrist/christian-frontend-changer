import { useEffect, useState } from "react";
import { name as AppName } from "../../constant/appname";
import { LOGIN } from "../../constant/routes";
import { AuthButton } from "../../components/buttons";
import twofactor_request from "../../helpers/requests/twoFactorAuth";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Base from "./base";

export default function Factor2auth() {
	useEffect(() => {
		document.title = "TwoFactor Authentication Fctrader";
	}, []);
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState("");

	const history = useHistory();
	const dispatch = useDispatch();

	const { email, password } = useSelector((s) => s.login);
	if (!email && !password) {
		history.push(LOGIN);
	}
	const handleChange = (e) => {
		const value = e.target.value;
		if (!isNaN(e.nativeEvent.data)) {
			setCode(value);
		} else {
			e.preventDefault();
		}
	};

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		const params = {
			form: e.target,
			history,
			setLoading,
			dispatch,
		};
		twofactor_request(params);
	};
	return (
		<>
			<Base>
				<div
					className="selection:bg-indigo-500 selection:text-white flex "
					style={{
						background: "url(" + require("../../assets/line.svg").default + ")",
						backgroundSize: "100%",
						backgroundPosition: "bottom",
					}}
				>
					<div className="min-h-screen flex justify-center items-center flex-1">
						<div className="p-8 flex-1">
							<div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
								<div className="relative h-48 bg-indigo-600 rounded-bl-4xl">
									<svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
										<path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
									</svg>
								</div>
								<div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
									<div className="flex justify-center items-center space-x-1">
										<img src={require("../../assets/logo.svg").default} className="w-8 h-8" alt="logo" /> <h1 className="text-2xl font-semibold text-gray-900 uppercase">{AppName}</h1>
									</div>
									<h3 className="text-md text-center leading-tight tracking-tight font-semibold text-gray-700 mt-5">Entrez le code de véfication</h3>

									<form className="mt-12" action="" method="POST" onSubmit={handleSubmit}>
										<div className="relative">
											<input id="email" name="email" type="hidden" value={email} />
											<input id="password" name="password" type="hidden" value={password} />
											<div>
												<input id="code" value={code} onChange={handleChange} required={true} type="text" name="code" className={"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none "} placeholder="Entre le code" />
												<label htmlFor="code" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
													{"Entre le code"}
												</label>
											</div>
										</div>
										<AuthButton loading={loading} cls={"bg-indigo-500 hover:bg-indigo-400"}>
											Envoyer
										</AuthButton>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className=" justify-center items-center hidden md:flex">
						<img src={require("../../assets/login-illustration.svg").default} alt="" className="h-96" />
					</div>
				</div>
			</Base>{" "}
		</>
	);
}
