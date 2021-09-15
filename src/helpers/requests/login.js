import axioInstance from "../axios";
import {FACTOR2AUTH, DASHBORD} from "../../constant/routes"


const log = (form, obj, _m)=>{
	//obj = {history, setLoading, authicatte, setError}
	const formdata = new FormData(form)
	let data = {};
	formdata.forEach((v, k) => {
		data[k] = v;
	});
	axioInstance.post("/user/signin/", data, { withCredentials: true })
				.then(response=>{
					if(_m.current){
						if (response.data.redirect){
							obj.setting(data)
							obj.history.push(FACTOR2AUTH)
							obj.showed({tag:"info", title:"Vérification", message:"vérifier votre addresse email"})
							obj.setLoading(false)
							return;
						}
						obj.authenticate(response.data)
						obj.setLoading(false)
						obj.showed({tag:"success", title:"Connecté", message:"Bienvenue "+response.data.username})
						obj.history.push(DASHBORD)
						return
					}

				})
				.catch(error=>{
					if(_m.current){
						let msg = "";
						if(error.response){
							msg = error.response?.data?.detail || "invalid credentials"
						}else{
							msg = "Le serveur ne répond pas !!!"
						}
						
						obj.showed({tag:"warning", title:"Error", message:msg})
						obj.setLoading(false)
						return
					}
				})

}
export default log;