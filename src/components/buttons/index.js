export const AuthButton = ({type="submit", cls="bg-teal-500 hover:bg-teal-400",loading, children, 
onclick=()=>{}
})=>{
	return  <button type={type} onClick={onclick} disabled={loading}
			   className={`mt-4 px-4 py-2 rounded ${cls} text-white font-semibold text-center block w-full 
			   			focus:outline-none focus:ring focus:ring-offset-2
			   			 focus:ring-opacity-80 cursor-pointer ${loading && "bg-gray-100 hover:bg-gray-100"} `} >
			   {loading ?(
				<>
				<div className="w-8 h-8 text-white-400 text-center" title="1">
				<svg version="1.1" id="loader-1"x="0px" y="0px"
				width="40px" height="40px" viewBox="0 0 50 50" style={{"enableBackground":"new 0 0 50 50;"}} xmlSpace="preserve">
				<path fill="currentColor" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
				<animateTransform attributeType="xml"
					attributeName="transform"
					type="rotate"
					from="0 25 25"
					to="360 25 25"
					dur="0.6s"
					repeatCount="indefinite"/>
				</path>
				</svg>
				</div>
				
				</>
			   ) : children}
			 </button>
}