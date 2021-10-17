import * as message_actions from "./message";
import * as twofactor_actions from "./twofactor";
import * as auth_actions from "./auth";
import * as email_verification_actions from "./email-verification";
import * as login_actions from "./login";
import * as register_actions from "./register";
import * as reset_password_actions from "./reset_p";

const actions = {
	message_actions,
	auth_actions,
	twofactor_actions,
	email_verification_actions,
	login_actions,
	register_actions,
	reset_password_actions,
};

export default actions;
