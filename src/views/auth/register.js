import {useEffect} from "react"

import {useSelector, useDispatch} from "react-redux"
import {bindActionCreators} from "redux"

import {register as register_req} from "../../helpers/requests/register"
import * as actions from "../../state/actions/register"
import * as messageactions from "../../state/actions/message"
import Footer from "../../components/simple/footer"
import Nav from "../../components/simple/nav"
import {name as AppName, logo} from "../../constant/appname";
import {Link, useHistory} from "react-router-dom";
import FlashMessage from "../../components/messages/message"
import {Inputgroup} from "../../components/input"
import {AuthButton} from "../../components/buttons"

export default function Register(){
	useEffect(() => {
		document.title = "Nous rejoindre pour Commencer les Echanges rapides"
	}, [])
	const state = useSelector((state)=>state.register)
	const dispatch = useDispatch();
	const _actions = bindActionCreators(actions,dispatch);
	const m_actions =  bindActionCreators(messageactions,dispatch);
	const _h = useHistory();
	let button = {text:state.loading ? "Chargement en cours ..." : "Créer votre compte"}


	const handleSubmit = (e)=>{
		e.preventDefault()
		register_req(e.target,_actions,m_actions)
	}
	if(state.registed){
		_h.push("/auth/accounts/verified-email")
	}
	return (
		<>
		<Nav login={true}/>
		<FlashMessage/>

		   <div className=" relative selection:bg-teal-500 selection:text-white flex justify-evenly tems-center">
		        <div className="absolute top-0 md:left-8 flex justify-center items-center">
		          <div className="py-4 flex-1">
		            <div className="bg-white rounded-3xl mx-auto overflow-hidden shadow-xl w-96">
		              <div className="relative h-32 bg-teal-600 rounded-bl-4xl">
		                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		                  <path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		                </svg>
		              </div>
		              <div className="px-10 pt-2 pb-8 bg-white rounded-tr-4xl">
		                <div className="flex justify-center items-center"><h1 className="text-2xl font-semibold text-gray-900 uppercase">{AppName}</h1> 
		                <img  src={logo} className="w-8 h-8" alt=""/> </div>
		                <h3 className="text-md font-thin text-sky-800 mt-2">Nous Rejoindre pour une experience de transactions en ligne</h3>

		                <form className="mt-10" action="" method="POST" onSubmit={handleSubmit}>
		                <input type="hidden" name="sponsor" value={state.sponsor || ""} />

		                  <div className="relative">
		                   	<Inputgroup type={"email"} id={"email"} label={"Addresse Email"}
		                   	 name={"email"} cls={"focus:border-teal-600"}/>
		                  	{state.errors?.email && <span className="text-xs text-red-500 font-semibold">{state.errors.email}</span>}
		                  </div>

		                  <div className="mt-10 relative">
		                    <Inputgroup type={"text"} id={"username"} label={"Pseudo"}
		                   	 name={"username"} cls={"focus:border-teal-600"}/>
		                 	{state.errors?.username && <span className="text-xs text-red-500 font-semibold">{state.errors.username}</span>}
		                  </div>

		                  <div className="mt-10 relative">
		                    <Inputgroup type={"password"} id={"password"} label={"Mot de passe"}
		                   	 name={"password"} cls={"focus:border-teal-600"}/>
		                 	{state.errors?.password && <span className="text-xs text-red-500 font-semibold">{state.errors.password}</span>}
		                  </div>

		                   <div className="mt-10 relative">
		                    <Inputgroup type={"password"} id={"password1"} label={"Confirmé le votre mot de passe"}
		                   	 name={"password1"} cls={"focus:border-teal-600"}/>
		                    {state.errors?.password && <span className="text-xs text-red-500 font-semibold">{state.errors.password}</span>}
		                  </div>
		
		                 <AuthButton>{button.text}</AuthButton>
		                </form>
		                <hr className="w-full my-3 bg-gray-500 "/>
		                <Link to="/auth/client/login" className="mt-4 block text-sm te400er font-medium text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500"> connectez-vous </Link>
		              </div>
		            </div>
		          </div>
		        </div>
		        <div className="bg-teal-100 min-h-screen full-screen flex justify-center items-center flex-1" style={{
		        	background:"url(" + require("../../assets/register-bg.jpg").default + ")",
		        	backgroundSize:"100%",
		        	backgroundPosition:"center"
		        }}>
		       
		        </div> 
		    </div>
		    <Footer/>


		</>


		)
}