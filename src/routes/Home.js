import React from "react";
import TextForm from "../components/TextForm";
import Alert from "../components/Alert";

export default function Home(props) {
	return (
		<>
			<h1 className="text-white">Home</h1>
			<Alert theme={props.theme} alertText={props.alertText} />
			<TextForm
				inputLabel={props.inputLabel}
				textAndOutlineColor={props.textAndOutlineColor}
				theme={props.theme}
				showAlert={props.showAlert}
			/>
		</>
	);
}
