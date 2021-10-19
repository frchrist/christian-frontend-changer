import axioInstance from "../axios";
import { refresh, signout } from "../../features/userSlice";

const refreshHttpRequest = async ({ dispatch }) => {
	try {
		const response = await axioInstance.post("/user/token/refresh/", {}, { withCredentials: true });
		dispatch(refresh(response.data));
	} catch (e) {
		dispatch(signout());
	}
};

export default refreshHttpRequest;
