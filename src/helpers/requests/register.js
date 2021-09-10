import axioInstance from "../axios"



export const register =(form, {registed, failed, loading}, {showed, hide})=>{
	loading();
	const formdata = new FormData(form);
	let data = {}
	formdata.forEach((v,k)=>{
		data[k] = v;
	})

	if(data.password1 === data.password){
		axioInstance.post("/user/register/", data)
					.then(response=>{
						registed(response.data)
						showed({tag:"success", title:"Compte cftrader", message:"Votre Compte à été bien crée"})
						
					})
					.catch(errors=>{
						if(errors.response){
							failed(errors?.response?.data)
						}else{
							failed({server:"Le serveur ne reponse pas ..."})
							showed({tag:"warning", title:"Erreur de connection", message:"Le serveur ne reponse pas ..."})
						}
						

					})
	}else{
		failed({"password":"password not match !!!"})
	}

}

export const Emailverification_code = (form,Succes,Loading,flash)=>{
	axioInstance.post('/user/verified/', new FormData(form))
				.then(res=>{
					flash({tag:"success",title:"success",message:res.data.Success})
					Succes(true);
					Loading(false)

				})
				.catch(errors=>{
					Loading(false)
					flash({tag:"warning", title:"Données invalides", message:errors?.response?.data?.Error})
					
				})
}
