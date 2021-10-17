import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import actions from "../../state/actions";

import Footer from "../../components/simple/footer";
import Nav from "../../components/simple/nav";
import { name as AppName, logo } from "../../constant/appname";
import FlashMessage from "../../components/messages/message";
import { Inputgroup } from "../../components/input";
import { AuthButton } from "../../components/buttons";
import { reset_password_request } from "../../helpers/requests";
import { LOGIN } from "../../constant/routes";
export default function Restpassword() {
	useEffect(() => {
		document.title = "Mot de passe oublié ? Changer votre mot de passe";
	}, []);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const { message_actions } = actions;
	const _actions = bindActionCreators(message_actions, dispatch);
	const send = (e) => {
		e.preventDefault();
		setLoading(true);
		reset_password_request(e.target, setLoading, _actions);
	};
	return (
		<>
			<Nav />
			<FlashMessage />
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

								<h3 className="text-md text-center leading-tight tracking-tight font-semibold text-gray-700 mt-5">Entrez votre addresse email pour changer votre mot de passe</h3>
								<section className="divide-y">
									{/* start main form */}
									<form className="mt-8" action="" method="POST" onSubmit={send}>
										<div className="relative">
											<Inputgroup type={"email"} id={"email"} name={"email"} label={"Addresse Email"} cls={"focus:border-indigo-600"} />
										</div>
										<AuthButton loading={loading} cls={"bg-indigo-500 hover:bg-indigo-400"}>
											Envoyer
										</AuthButton>
									</form>
									{/* Ending of the main form */}
									<div className="mt-4">
										<span className="text-sm text-gray-400">Retourner à page de connexion ?</span>
										<Link to={LOGIN} className="ml-1 inline-block text-sm te400er font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500">
											{" "}
											ici
										</Link>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>

				<div className=" justify-center items-center hidden md:flex">
					<img src={require("../../assets/forgot.svg").default} alt="" className="h-96" />
				</div>
			</div>
			<Footer />
		</>
	);
}
