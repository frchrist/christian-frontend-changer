import React from "react";
import Info from "./info";
import Success from "./success";
import Warning from "./warning";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "../../features/messageSlice";

function Message(tag, title, message) {
	switch (tag) {
		case "info":
			return <Info tag={title} message={message} />;
		case "success":
			return <Success tag={title} message={message} />;
		case "warning":
			return <Warning tag={title} message={message} />;
		default:
			return <Info tag={title} message={message} />;
	}
}

export default function FlashMessage() {
	const { tag, message, visible, title } = useSelector((state) => state.message);
	const dispatch = useDispatch();

	if (visible) {
		setTimeout(() => {
			dispatch(hide());
		}, 5000);
	}

	return <>{visible && Message(tag, title, message)}</>;
}
