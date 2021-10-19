import axioInstance from "../axios";
import { signout } from "../../features/userSlice";
const logout = ({ history, dispatch }) => {
	axioInstance
		.post("/user/signout/", {}, { withCredentials: true })

		.then((response) => {
			dispatch(signout());
			history.push("/");
		})
		.catch((e) => {});
};
export default logout;
