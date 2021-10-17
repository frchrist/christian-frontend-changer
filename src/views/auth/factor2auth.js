import { useEffect, useState } from "react";
import Footer from "../../components/simple/footer";
import Nav from "../../components/simple/nav";
import { name as AppName, logo } from "../../constant/appname";
import FlashMessage from "../../components/messages/message";
import { LOGIN } from "../../constant/routes";
import { AuthButton } from "../../components/buttons";
import twofactor_request from "../../helpers/requests/twoFactorAuth";
import CodeInput from "../../components/input/code";
export default function Factor2auth({ twofactordata, auth_action, message_action, history, twofactor_action }) {
	useEffect(() => {
		document.title = "TwoFactor Authentication Fctrader";
	}, []);
	const [loading, setLoading] = useState(false);
	const [valid, setValid] = useState(false);
	const [code, setCode] = useState("");

	if (!twofactordata.email && !twofactordata.email) {
		history.push(LOGIN);
	}

	const send = (e) => {
		setLoading(true);
		e.preventDefault();
		twofactor_request(e.target, twofactor_action, auth_action, message_action, history, setLoading);
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
								<h3 className="text-md text-center leading-tight tracking-tight font-semibold text-gray-700 mt-5">Entrez le code de véfication</h3>

								<form className="mt-12" action="" method="POST" onSubmit={send}>
									<div className="relative">
										<input id="email" name="email" type="hidden" value={twofactordata.email} />
										<input id="password" name="password" type="hidden" value={twofactordata.password} />
										<input id="code" name="code" type="hidden" value={code} />
										<CodeInput func={setValid} changeCode={setCode} />
									</div>
									{valid ? (
										<AuthButton loading={loading} cls={"bg-indigo-500 hover:bg-indigo-400"}>
											Envoyer
										</AuthButton>
									) : (
										<div className="h-20"></div>
									)}
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
