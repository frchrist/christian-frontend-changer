import axioInstance from "../axios";
import { EMAIL_VERIFICATION, LOGIN } from "../../constant/routes";
import { show } from "../../features/messageSlice";
import { request_done } from "../../features/resetPasswordSlice";
export const register_request = (dataR) => {
	const { form, history, setLoading, setErrors, dispatch } = dataR;
	const formdata = new FormData(form);
	let data = {};
	formdata.forEach((v, k) => {
		data[k] = v;
	});

	if (data.password1 === data.password) {
		axioInstance
			.post("/user/signup/", data)
			.then((response) => {
				setLoading(false);
				localStorage.setItem("email", response.data.email);
				dispatch(show({ tag: "success", title: "Compte cftrader", message: "Votre Compte à été bien crée" }));
				history.push(EMAIL_VERIFICATION);
			})
			.catch((errors) => {
				setLoading(false);
				if (errors.response) {
					setErrors([errors?.reponse?.data]);
				} else {
					setErrors([]);
					dispatch(show({ tag: "warning", title: "Erreur de connection", message: "Le serveur ne reponse pas ..." }));
				}
			});
	} else {
		setErrors({ password: "password not match !!!" });
		setLoading(false);
	}
};

export const email_verification_request = ({ form, history, setLoading, dispatch }) => {
	axioInstance
		.post("/user/email/verification/", new FormData(form))
		.then((res) => {
			dispatch(show({ tag: "success", title: "success", message: res.data.detail }));
			//remove email from localstorage
			localStorage.removeItem("email");
			setLoading(false);
			history.push(LOGIN);
		})
		.catch((errors) => {
			dispatch(show({ tag: "warning", title: "Données invalides", message: errors?.response?.data?.Error }));
			setLoading(false);
		});
};

export const reset_password_request = ({ form, setLoading, dispatch }) => {
	axioInstance
		.post("/user/change/password/", new FormData(form))
		.then((response) => {
			dispatch(show({ tag: "success", title: "Modifier votre mot de passe", message: response.data.detail }));
			setLoading(false);
		})
		.catch((e) => {
			setLoading(false);
		});
};

export const reset_password_done_request = ({ token, uidb64, history, dispatch }) => {
	axioInstance
		.get(`/user/change/password/check/data/${uidb64}/${token}/`)
		.then((response) => {
			//le token et le uid sont valident
			request_done({ token, uidb64 });
			history.push("/auth/accounts/reset-password-complete");
		})
		.catch((e) => {
			dispatch(show({ tag: "warning", title: "Erreur", message: "Ce lien est invalide" }));
			history.push("/");
		});
};
export const reset_password_complete_request = ({ form, setLoading, history, dispatch }) => {
	if (form.get("password") !== form.get("password1")) {
		dispatch(show({ tag: "warning", title: "Mot de passe", message: "Vos mots de passe ne correspondent pas !!!" }));
		setLoading(false);
		return;
	}
	axioInstance
		.patch("/user/change/password/complete/", form)
		.then((response) => {
			setLoading(false);
			dispatch(show({ tag: "success", title: "Mot de passe modifié", message: response?.data.detail }));
			history.push("/auth/accounts/login");
		})
		.catch((e) => {
			setLoading(false);
			if (e.response) {
				dispatch(show({ tag: "warning", title: "Erreur", message: e.response.data?.password || e.response.data?.detail }));
			} else {
				dispatch(show({ tag: "warning", title: "Erreur", message: "Le serveur ne répond pas !!!" }));
			}
		});
};
