import {useEffect} from "react"
import Footer from "../../components/simple/footer"
import Nav from "../../components/simple/nav"
import {name as AppName, logo} from "../../constant/appname";
import FlashMessage from "../../components/messages/message"
import {Inputgroup} from "../../components/input"
import {AuthButton} from "../../components/buttons"

export default function Resetpasswordcomplete(){
	useEffect(() => {
		document.title = "Nouveau Mot de passe"
	}, [])
	return (
		<>
	
		<Nav/>
		 <FlashMessage/>	
		   <div className="selection:bg-indigo-500 selection:text-white flex " style={{
		        	background:"url(" + require("../../assets/line.svg").default + ")",
		        	backgroundSize:"100%",
		        	backgroundPosition:"bottom",
		        }}>
		        <div className="min-h-screen flex justify-center items-center flex-1" >
		          <div className="p-8 flex-1">
		            <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
		              <div className="relative h-48 bg-indigo-600 rounded-bl-4xl">
		                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
		                  <path fill="#fff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		                </svg>
		              </div>
		              <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
		                <div className="flex justify-center items-center"><h1 className="text-2xl font-semibold text-gray-900 uppercase">{AppName}</h1> 
		                <img  src={logo} className="w-8 h-8" alt="logo"/> </div>
		                <h3 className="text-md font-thin text-sky-800 mt-2">Entrez le nouveau mot de passe</h3>

		                <form className="mt-12" action="" method="POST">
		                  <div className="relative">
		                  	 <Inputgroup type={"password"} id={"password"} label={"Nouveau Mot de passe"}
		                   	 name={"password"} cls={"focus:border-indigo-600"}/>
		                  </div>
		                  <div className="relative mt-10">
		                    <Inputgroup type={"password"} id={"password"} label={"Confirmé le Mot de passe"}
		                   	 name={"password"} cls={"focus:border-indigo-600"}/>
		                  </div>
		                  
		      
		                  <AuthButton cls={"focus:border-indigo-600"} >Enregistrez </AuthButton>
		                </form>
		              </div>
		            </div>
		          </div>
		        </div>

		      <div className=" justify-center items-center hidden md:flex">
		      	<img src={require("../../assets/login-illustration.svg").default} alt="" className="h-96" />

		      </div>  
		         
		      
		    </div>
		    <Footer/>


		</>


		)
}