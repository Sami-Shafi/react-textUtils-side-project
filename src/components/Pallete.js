import React from "react";

export default function Pallete({ bgColor, handleTheme, outlineColor }) {
	return (
		<span
			className={`plt_circle bg-${bgColor}
            border border-${outlineColor}`}
			onClick={() => {
				handleTheme(bgColor);
			}}
		></span>
	);
}
