import { createSlice } from "@reduxjs/toolkit";

const init = {
	username: "",
	email: "",
	token: "",
};

const userSlice = createSlice({
	name: "user",
	initialState: init,
	reducers: {
		signin: (state, action) => action.payload,
		signout: (state) => init,
		refresh: (state, action) => {
			state.token = action.payload;
		},
	},
});

export const { signin, signout, refresh } = userSlice.actions;
export default userSlice.reducer;
