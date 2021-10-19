import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import messageReducer from "../features/messageSlice";
import userReducer from "../features/userSlice";
import resetPasswordReducer from "../features/resetPasswordSlice";
export const store = configureStore({
	reducer: {
		message: messageReducer,
		user: userReducer,
		login: loginReducer,
		resetPassword: resetPasswordReducer,
	},
});
