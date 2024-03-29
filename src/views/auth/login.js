import { Inputgroup } from "../../components/input";
import { name as AppName } from "../../constant/appname";
import { AuthButton } from "../../components/buttons";
import loginHttpRequest from "../../helpers/requests/login";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER, FORGOT_PASSWORD } from "../../constant/routes";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Base from "./base";
export default function Login() {
	useEffect(() => {
		document.title = "Authentification du client";
		return () => {};
	}, []);
	const history = useHistory();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			form: e.target,
			dispatch,
			history,
			setLoading,
		};
		loginHttpRequest(data);
	};

	return (
		<>
			<Base register={true}>
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
									<h3 className=" text-opacity-200 text-xl text-center leading-tight tracking-tight font-semibold text-indigo-900 mt-2">Identifiez-vous ici pour commencer vos echanges</h3>

									<div className="divide-y">
										<form className="mt-6" action="" method="POST" onSubmit={handleSubmit}>
											<div className="relative">
												<Inputgroup type={"email"} id={"email"} name={"email"} label={"Addresse Email"} cls={"focus:border-indigo-600"} />
											</div>
											<div className="mt-5 relative">
												<Inputgroup type={"password"} id={"password"} name={"password"} label={"Mot de passe"} cls={"focus:border-indigo-600"} />
											</div>

											<AuthButton loading={loading}>Connexion</AuthButton>
											<Link to={FORGOT_PASSWORD} className="mt-4 block text-sm te400er font-medium text-indigo-600 hover:underline focus:outline-none">
												{" "}
												Mot de passe oublié ?{" "}
											</Link>
										</form>
										<div className="my-2">
											<span className="text-sm text-gray-400">Avez n'avez pas encore un compte ?</span>
											<Link to={REGISTER} className="block text-sm te400er font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
												{" "}
												Créer un compte{" "}
											</Link>
										</div>
									</div>
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
