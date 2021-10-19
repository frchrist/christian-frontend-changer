import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { register_request as registerHttpRequest } from "../../helpers/requests";
import { name as AppName } from "../../constant/appname";
import { Link } from "react-router-dom";
import { Inputgroup } from "../../components/input";
import { AuthButton } from "../../components/buttons";
import { useDispatch } from "react-redux";
import Base from "./base";
export default function Register() {
	useEffect(() => {
		document.title = "Nous rejoindre pour Commencer les Echanges rapides";
		return () => {};
	}, []);
	const history = useHistory();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const sponsor = localStorage.getItem("s_user");

	let button = "Créer votre compte";

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const form = e.target;
		const data = {
			history,
			dispatch,
			form,
			setLoading,
			setErrors,
		};
		registerHttpRequest(data);
	};

	return (
		<>
			<Base>
				<section className="flex items-center justify-center w-full">
					<div className="flex justify-center md:justify-between items-center w-96 md:px-4 md:w-10/12 md:space-x-5">
						<div className="py-4">
							<div className="bg-white rounded-3xl mx-auto overflow-hidden shadow-xl w-88">
								<div className="relative h-32 bg-teal-600 rounded-bl-4xl">
									<svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
										<path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
									</svg>
								</div>
								<div className="px-10 pt-2 pb-8 bg-white rounded-tr-4xl">
									<div className="flex justify-center items-center space-x-1">
										<img src={require("../../assets/logo.svg").default} className="w-8 h-8" alt="logo" /> <h1 className="text-2xl font-semibold text-gray-900 uppercase">{AppName}</h1>
									</div>
									<h3 className="text-md text-center leading-tight tracking-tight font-semibold text-indigo-900 mt-2">Nous Rejoindre pour une experience de transactions en ligne</h3>
									<div className="divide-y">
										<form className="mt-10 space-y-6 " action="" method="POST" onSubmit={handleSubmit}>
											<input type="hidden" name="sponsor" value={sponsor || ""} />

											<div className="relative">
												<Inputgroup type={"email"} id={"email"} label={"Addresse Email"} name={"email"} cls={"focus:border-teal-600"} />
												{errors?.email && <span className="text-xs text-red-500 font-semibold">{errors.email}</span>}
											</div>

											<div className=" relative">
												<Inputgroup type={"text"} id={"username"} label={"Pseudo"} name={"username"} cls={"focus:border-teal-600"} />
												{errors?.username && <span className="text-xs text-red-500 font-semibold">{errors.username}</span>}
											</div>

											<div className=" relative">
												<Inputgroup type={"password"} id={"password"} label={"Mot de passe"} name={"password"} cls={"focus:border-teal-600"} />
												{errors?.password && <span className="text-xs text-red-500 font-semibold">{errors.password}</span>}
											</div>

											<div className=" relative">
												<Inputgroup type={"password"} id={"password1"} label={"Confirmé le votre mot de passe"} name={"password1"} cls={"focus:border-teal-600"} />
												{errors?.password && <span className="text-xs text-red-500 font-semibold">{errors.password}</span>}
											</div>

											<AuthButton loading={loading}>{button}</AuthButton>
										</form>
										<div className="mt-3">
											<span className="text-sm text-gray-800">Avez-vous déja un compte ?</span>
											<Link to="/auth/client/login" className="inlin-block text-sm te400er font-medium text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500">
												{" "}
												connectez-vous{" "}
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="hidden md:block">
							<img src={require("../../assets/register-illustration.svg").default} alt="" className="w-11/12" />
						</div>
					</div>
				</section>
			</Base>
		</>
	);
}
