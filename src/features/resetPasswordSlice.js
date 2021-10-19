import { createSlice } from "@reduxjs/toolkit";

const initial = {
	uidb64: "",
	token: "",
	newPassword: "",
};

const resetPasswordSlice = createSlice({
	name: "restPassword",
	initialState: initial,
	reducers: {
		request_done: (state, action) => {
			state.uidb64 = action.payload.uidb64;
			state.token = action.payload.token;
		},
		request_complete: (state, action) => {
			state.newPassword = action.payload;
		},
	},
});

export const { request_done, request_complete } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
