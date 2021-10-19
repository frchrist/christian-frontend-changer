import axioInstance from "../axios";
import { DASHBORD } from "../../constant/routes";

import { show } from "../../features/messageSlice";
import { signin } from "../../features/userSlice";
import { reset } from "../../features/loginSlice";

const requests = ({ form, history, dispatch, setLoading }) => {
	axioInstance
		.post("user/signin/twofactor/client_id=none", new FormData(form), { withCredentials: true })
		.then((response) => {
			setLoading(false);
			dispatch(reset());
			dispatch(signin(response.data));
			dispatch(show({ tag: "success", title: "Connecté", message: "Bienvenue " + response.data.username }));
			history.push(DASHBORD);
		})
		.catch((errors) => {
			setLoading(false);
			dispatch(show({ tag: "warning", title: "Erreur", message: errors.response?.data?.detail }));
		});
};
export default requests;
