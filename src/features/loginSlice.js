import { createSlice } from "@reduxjs/toolkit";

const initial = {
	email: "",
	password: "",
};

const loginSlice = createSlice({
	name: "login",
	initialState: initial,
	reducers: {
		success: (state, action) => action.payload,
		reset: (state) => initial,
	},
});

export const { success, reset } = loginSlice.actions;
export default loginSlice.reducer;
