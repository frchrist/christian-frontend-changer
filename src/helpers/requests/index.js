import axioInstance from "../axios";
import { EMAIL_VERIFICATION, LOGIN } from "../../constant/routes";
export const register_request = (form, { registed, failed, loading }, { showed, hide }, history) => {
	loading();
	console.log("req");
	const formdata = new FormData(form);
	let data = {};
	formdata.forEach((v, k) => {
		data[k] = v;
	});

	if (data.password1 === data.password) {
		axioInstance
			.post("/user/signup/", data)
			.then((response) => {
				registed(response.data);
				localStorage.setItem("email", response.data.email);
				showed({ tag: "success", title: "Compte cftrader", message: "Votre Compte à été bien crée" });
				history.push(EMAIL_VERIFICATION);
			})
			.catch((errors) => {
				console.log("dd");
				if (errors.response) {
					failed(errors?.response?.data);
				} else {
					failed({ server: "Le serveur ne reponse pas ..." });
					showed({ tag: "warning", title: "Erreur de connection", message: "Le serveur ne reponse pas ..." });
				}
			});
	} else {
		console.log("ddd");
		failed({ password: "password not match !!!" });
	}
};

export const email_verification_request = ({ form, success, failed, history, showed }) => {
	axioInstance
		.post("/user/email/verification/", new FormData(form))
		.then((res) => {
			history.push(LOGIN);
			showed({ tag: "success", title: "success", message: res.data.detail });
			success();
			//remove email from localstorage
			localStorage.removeItem("email");
		})
		.catch((errors) => {
			failed();
			showed({ tag: "warning", title: "Données invalides", message: errors?.response?.data?.Error });
		});
};

export const reset_password_request = (form, state, message) => {
	axioInstance
		.post("/user/change/password/", new FormData(form))
		.then((response) => {
			message.showed({ tag: "success", title: "Modifier votre mot de passe", message: response.data.detail });
			state(false);
		})
		.catch((e) => {
			state(false);
		});
};

export const reset_password_done_request = (token, uid, setdatavalid, settoken, message, history) => {
	axioInstance
		.get(`/user/change/password/check/data/${uid}/${token}/`)
		.then((response) => {
			//le token et le uid sont valident
			settoken({ token, uidb64: uid });
			setdatavalid();
			history.push("/auth/accounts/reset-password-complete");
		})
		.catch((e) => {
			message.showed({ tag: "warning", title: "Erreur", message: "Ce lien est invalide" });
			history.push("/");
		});
};
export const reset_password_complete_request = (form, loading, h, message) => {
	axioInstance
		.patch("/user/change/password/complete/", new FormData(form))
		.then((response) => {
			loading(false);
			h.push("/auth/accounts/login");
			message.showed({ tag: "success", title: "Mot de passe modifié", message: response?.data.detail });
		})
		.catch((e) => {
			loading(false);
			if (e.response) {
				message.showed({ tag: "warning", title: "Erreur", message: e.response.data?.password || e.response.data?.detail });
			} else {
				message.showed({ tag: "warning", title: "Erreur", message: "Le serveur ne répond pas !!!" });
			}
		});
};
