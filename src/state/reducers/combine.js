import {combineReducers } from "redux"
import registerReducer from "./register"
import loginReducer from "./login"
import authReducer from "./auth"
import messageReducer from "./message"

export const reducers = combineReducers({
	register:registerReducer,
	login:loginReducer,
	auth:authReducer,
	message:messageReducer,

})
