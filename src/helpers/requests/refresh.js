import axioInstance from "../axios";
// import { LOGIN } from "../../constant/routes";

const  refresh = async (setter, log, history) => {
	try{
		const response = await axioInstance.post("/user/token/refresh/", {}, { withCredentials: true })
		setter(response.data);
		return
	}catch(e){
		log();
		return;
	}	
};

export default refresh;
