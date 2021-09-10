import Nav from "../../components/simple/nav"
import {Link} from "react-router-dom"
import {useEffect} from "react"


export default function Handle404(){
	useEffect(()=>{
		document.title = "Page Not found :  404"
	}, [])

	return (
		<div>
		<Nav />
		<div className="flex flex-col items-center justify-center">
			<img src={require("../../assets/handle404.svg").default} alt="" className="h-96"/>
			<p className="text-gray-500">Cette page n'existe pas retourné <Link to="/" className="text-sky-900">ici</Link></p>
		</div>

		</div>

		)
}