import React from "react";
//components
import Footer from "../../components/simple/footer";
import Nav from "../../components/simple/nav";
import FlashMessage from "../../components/messages/message";

const AuthencationTemplate = ({ register = false, children }) => {
	return (
		<>
			<Nav register={register} />
			<FlashMessage />
			{children}
			<Footer />
		</>
	);
};

export default AuthencationTemplate;
