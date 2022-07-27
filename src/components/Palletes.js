import React from "react";
import Pallete from "./Pallete";

export default function Palletes({ handleTheme, outlineColor }) {
	return (
		<>
			<Pallete
				bgColor="danger"
				handleTheme={handleTheme}
				outlineColor={outlineColor}
			/>
            
			<Pallete
				bgColor="warning"
				handleTheme={handleTheme}
				outlineColor={outlineColor}
			/>
			<Pallete
				bgColor="success"
				handleTheme={handleTheme}
				outlineColor={outlineColor}
			/>
			<Pallete
				bgColor="dark"
				handleTheme={handleTheme}
				outlineColor={outlineColor}
			/>
			<Pallete
				bgColor="light"
				handleTheme={handleTheme}
				outlineColor={outlineColor}
			/>
		</>
	);
}
