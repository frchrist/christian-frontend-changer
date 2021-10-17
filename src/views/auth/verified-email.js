import { useEffect } from "react";
import Footer from "../../components/simple/footer";
import Nav from "../../components/simple/nav";
import { name as AppName, logo } from "../../constant/appname";
import { useHistory, Redirect } from "react-router-dom";
import { REGISTER } from "../../constant/routes";
import { email_verification_request } from "../../helpers/requests";
import FlashMessage from "../../components/messages/message";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthButton } from "../../components/buttons/index";
import actions from "../../state/actions";

export default function EmailVerification() {
	useEffect(() => {
		document.title = "Verifiez votre addresse Email";
	}, []);
	const { message_actions, email_verification_actions } = actions;
	const { load, code } = useSelector((state) => state.email_ver);
	const _h = useHistory();
	const _d = useDispatch();
	const { showed } = bindActionCreators(message_actions, _d);
	const { process, failed, success, setCode } = bindActionCreators(email_verification_actions, _d);

	// process()
	// console.log(loading)
	const HandleChange = (e) => {
		const value = e.target.value;
		console.log(e.nativeEvent.data);
		if (!isNaN(e.nativeEvent.data)) {
			setCode(value);
		} else {
			e.preventDefault();
		}
	};

	const send = (e) => {
		e.preventDefault();
		//requete
		process(); // set loading to true
		const parms = {
			form: e.target,
			success, //set loading to false
			failed, // set loading to false
			history: _h,
			showed, // flash message state
		};
		email_verification_request(parms);
	};

	if (!localStorage.getItem("email")) {
		return <Redirect to={REGISTER} />;
	}

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
								<h3 className="text-md font-thin text-sky-800 mt-2">Entrez le code de véfication</h3>

								<form className="mt-6" action="" method="POST" onSubmit={send}>
									<div className="relative">
										<input type="hidden" name="email" value={localStorage.getItem("email")} />
										<div>
											<input id="code" value={code} onChange={HandleChange} required={true} type="text" name="code" className={"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none "} placeholder="Entre le code" />
											<label htmlFor="code" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
												{"Entre le code"}
											</label>
										</div>
									</div>

									<AuthButton loading={load}>Envoyer</AuthButton>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className=" justify-center items-center hidden md:flex">
					<img src={require("../../assets/login-illustration.svg").default} alt="" className="h-96" />
				</div>
			</div>
			<Footer />
		</>
	);
}
