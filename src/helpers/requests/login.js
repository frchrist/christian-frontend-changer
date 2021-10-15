import axioInstance from "../axios";
import { FACTOR2AUTH, DASHBORD, EMAIL_VERIFICATION } from "../../constant/routes";

const log = (form, obj) => {
	//obj = {history, setLoading, authicatte, setError}
	const formdata = new FormData(form);
	let data = {};
	formdata.forEach((v, k) => {
		data[k] = v;
	});
	axioInstance
		.post("/user/signin/", data, { withCredentials: true })
		.then((response) => {
			if (response.data.redirect) {
				obj.setting(data);
				obj.history.push(FACTOR2AUTH);
				obj.showed({ tag: "info", title: "Vérification", message: "vérifier votre addresse email" });
				obj.login_action.success();
				return;
			}
			obj.login_action.success();
			obj.authenticate(response.data);
			obj.showed({ tag: "success", title: "Connecté", message: "Bienvenue " + response.data.username });
			obj.history.push(DASHBORD);
			return;
		})
		.catch((error) => {
			let msg = "";
			obj.login_action.failed({ errors: error?.response?.data?.detail });
			if (error.response?.data?.detail === "Email address is not verified") {
				localStorage.setItem("email", data.email);
				axioInstance.post("/user/refresh/email/verification/code", { email: data.email });
				obj.history.push(EMAIL_VERIFICATION);
				obj.showed({ tag: "info", title: "Redirect", message: "please active your email address" });
				return;
			}
			if (error.response) {
				msg = error.response?.data?.detail || "invalid credentials";
			} else {
				msg = "Le serveur ne répond pas !!!";
			}

			obj.showed({ tag: "warning", title: "Error", message: msg });
			return;
		});
};
export default log;
