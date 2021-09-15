import axioInstance from "../axios";

const logout = (state_actions, history) => {
	axioInstance
		.post("/user/signout/", {}, { withCredentials: true })
		.then((response) => {
			state_actions.logout();
			history.push("/");
		})
		.catch((e) => {});
};
export default logout;
