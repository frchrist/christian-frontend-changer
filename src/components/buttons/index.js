export const AuthButton = ({type="submit", cls="focus:ring-teal-500", children})=>{
	return  <button type={type}
			   className={"mt-10 px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-opacity-80 cursor-pointer disable:bg-gray-400 "+ cls} >
			   {children}
			 </button>
}