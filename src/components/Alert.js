import React from "react";

export default function Alert({theme, alertText }) {
	return (
		alertText && (
			<div
				className={`alert alert-${
					theme === "light" ? "dark" : "success"
				} alert-dismissible fade show`}
				role="alert"
			>
				<strong>{alertText}</strong>
			</div>
		)
	);
}
