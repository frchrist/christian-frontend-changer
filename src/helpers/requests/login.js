import axioInstance from "../axios";
import { FACTOR2AUTH, DASHBORD, EMAIL_VERIFICATION } from "../../constant/routes";
import { show } from "../../features/messageSlice";
import { success } from "../../features/loginSlice";
import { signin } from "../../features/userSlice";
const log = (data) => {
	const { dispatch, form, setLoading, history } = data;
	const formData = new FormData(form);
	axioInstance
		.post("/user/signin/", formData, { withCredentials: true })
		.then((response) => {
			setLoading(false);
			if (response.data.redirect) {
				const login = { email: formData.get("email"), password: formData.get("password") };
				dispatch(success(login));
				dispatch(show({ tag: "info", title: "Code PTO", message: "two factor authentication" }));
				history.push(FACTOR2AUTH);
				return;
			}
			dispatch(signin(response.data));
			dispatch(show({ tag: "success", title: "Connecté", message: "Bienvenue " + response.data.username }));
			history.push(DASHBORD);
			return;
		})
		.catch((error) => {
			let msg = "";
			setLoading(false);
			if (error.response?.data?.detail === "Email address is not verified") {
				localStorage.setItem("email", formData.get("email"));
				axioInstance.post("/user/refresh/email/verification/code", { email: formData.get("email") });
				dispatch(show({ tag: "info", title: "Redirect", message: "please active your email address" }));
				history.push(EMAIL_VERIFICATION);
				return;
			}
			if (error.response) {
				msg = error.response?.data?.detail || "invalid credentials";
			} else {
				msg = "Le serveur ne répond pas !!!";
			}

			dispatch(show({ tag: "warning", title: "Authentication Failed", message: msg }));
			return;
		});
};
export default log;
