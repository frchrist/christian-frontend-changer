import { combineReducers } from "redux";
import registerReducer from "./register";
import authReducer from "./auth";
import messageReducer from "./message";
import twofactorReducer from "./two_factor";

import resetPasswordReducer from "./reset_p";

export const reducers = combineReducers({
	register: registerReducer,
	auth: authReducer,
	message: messageReducer,
	resetpassword: resetPasswordReducer,
	twofactordata:twofactorReducer
});
