import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// ? components
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
	const [theme, setTheme] = useState("dark");
	const [alert, setAlert] = useState(null);

	// ? make the body compatible with theme
	document.body.className = `bg-${theme}-secondary`;

	// ? for making colors and borders good contrast with every theme
	let darkerPalletes = ["dark", "success", "danger"];
	let colorsLight;
	darkerPalletes.includes(theme)
		? (colorsLight = true)
		: (colorsLight = false);

	let textAndOutlineColor;
	colorsLight
		? (textAndOutlineColor = "light")
		: (textAndOutlineColor = "dark");

	let handleTheme = (theme) => {
		setTheme(theme);
	};
	let showAlert = (msg) => {
		setAlert(msg);

		setTimeout(() => {
			setAlert(null);
		}, 10000);
	};

	return (
		<>
			<Navbar
				brandName="TextUtils"
				handleTheme={handleTheme}
				theme={theme}
				colorsLight={colorsLight}
				textAndOutlineColor={textAndOutlineColor}
			/>
			<div className="container">

				<Routes>
					<Route
						path="/"
						element={
							<Home
								inputLabel="Enter Your Text"
								textAndOutlineColor={textAndOutlineColor}
								theme={theme}
								showAlert={showAlert}
							/>
						}
					/>
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
