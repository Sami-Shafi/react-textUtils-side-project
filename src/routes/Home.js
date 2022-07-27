import React from "react";
import TextForm from "../components/TextForm";

export default function Home(props) {
	return (
		<>
			<h1 className="text-white">Home</h1>
			<TextForm
				inputLabel={props.inputLabel}
				textAndOutlineColor={props.textAndOutlineColor}
				theme={props.theme}
				showAlert={props.showAlert}
			/>
		</>
	);
}
