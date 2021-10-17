import * as message_actions from "./auth/message";
import * as twofactor_actions from "./auth/twofactor";
import * as auth_actions from "./auth/auth";
import * as email_verification_actions from "./auth/email-verification";
import * as login_actions from "./auth/login";
import * as register_actions from "./auth/register";
import * as reset_password_actions from "./auth/reset_p";

export const authentication_actions = {
	message_actions,
	auth_actions,
	twofactor_actions,
	email_verification_actions,
	login_actions,
	register_actions,
	reset_password_actions,
};

