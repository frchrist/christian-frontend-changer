import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { name as AppName } from "../../constant/appname";
import { LOGIN } from "../../constant/routes";
import { Inputgroup } from "../../components/input";
import { AuthButton } from "../../components/buttons";
import { reset_password_complete_request } from "../../helpers/requests";

import Base from "./base";
export default function Resetpasswordcomplete() {
	useEffect(() => {
		document.title = "Nouveau Mot de passe";
	}, []);
	const state = useSelector((state) => state.resetPassword);
	const dispatch = useDispatch();
	const history = useHistory();
	const [loading, setLoading] = useState(false);

	if (!state.uidb64 || !state.token) {
		history.push(LOGIN);
	}
	const handleSubmit = (e) => {
		setLoading(true);
		const data = {
			history,
			dispatch,
			form: new FormData(e.target),
			setLoading,
		};
		e.preventDefault();

		reset_password_complete_request(data);
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
									<h3 className="text-md text-center leading-tight tracking-tight font-semibold text-gray-700 mt-5">Entrez le nouveau mot de passe</h3>

									<form className="mt-12" action="" method="POST" onSubmit={handleSubmit}>
										<input type="hidden" name="uidb64" value={state.uidb64} />
										<input type="hidden" name="token" value={state.token} />
										<div className="relative">
											<Inputgroup type={"password"} id={"password"} label={"Nouveau Mot de passe"} name={"password"} cls={"focus:border-indigo-600"} />
										</div>
										<div className="relative mt-10">
											<Inputgroup type={"password"} id={"password1"} label={"Confirmé le Mot de passe"} name={"password"} cls={"focus:border-indigo-600"} />
										</div>

										<AuthButton cls={"bg-indigo-400 focus:bg-indigo-600"} loading={loading}>
											Enregistrer
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
			</Base>
		</>
	);
}
