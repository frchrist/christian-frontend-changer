import { createSlice } from "@reduxjs/toolkit";

const init = {
	tag: "",
	message: "",
	title: "",
	visible: false,
};

const messageSlice = createSlice({
	name: "message",
	initialState: init,
	reducers: {
		show: (state, action) => {
			state.tag = action.payload.tag;
			state.message = action.payload.message;
			state.title = action.payload.title;
			state.visible = true;
		},
		hide: (state) => init,
	},
});

export const { show, hide } = messageSlice.actions;
export default messageSlice.reducer;
