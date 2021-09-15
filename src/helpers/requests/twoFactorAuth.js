import axioInstance from "../axios";
import {DASHBORD} from "../../constant/routes"


const requests= (form,twofactor_action, auth_action,message_action,history, setLoading)=>{
	axioInstance.post("user/signin/twofactor/client_id=none", new FormData(form), { withCredentials: true })
		.then(response=>{
			history.push(DASHBORD)
			setLoading(false)
			twofactor_action.reset()
			auth_action.authenticate(response.data)
			message_action.showed({tag:"success", title:"Connecté", message:"Bienvenue "+response.data.username})
		})
		.catch(errors=>{
			setLoading(false)
			message_action.showed({tag:"warning", title:"Erreur", message:errors.response?.data?.detail})
		})
}
export default requests;