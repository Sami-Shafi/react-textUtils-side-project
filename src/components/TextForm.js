import React, { useState, useRef, useEffect } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("");
	const [disabledText, setDisabledText] = useState("disabled");
	const functionalBtns = useRef();

	const handleUpClick = () => {
		let upperCasedText = text.toUpperCase();
		setText(upperCasedText);
		props.showAlert("Converted to uppercase!");
	};

	const handleLowClick = () => {
		if (text === "") {
			return;
		}
		let lowerCasedText = text.toLowerCase();
		setText(lowerCasedText);
		props.showAlert("Converted to lowercase!");
	};

	const handleCapClick = () => {
		let textArray = text.toLowerCase().split(" ");
		let newTextArray = [];
		textArray.forEach((item) => {
			let firstChar = item.charAt(0).toUpperCase();
			let otherChar = item.slice(1).toLowerCase();

			let cappedWord = firstChar + otherChar;
			newTextArray.push(cappedWord);
		});
		setText(newTextArray.join(" "));
		props.showAlert("Capitalized words!");
	};

	const handleCopyText = () => {
		//? Copy the text inside the text field
		navigator.clipboard.writeText(text);
		props.showAlert("Copied to clipboard!");
	};

	useEffect(() => {
		if (text !== "") {
			setDisabledText("");
		} else {
			setDisabledText("disabled");
		}
	}, [text]);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	let wordCount = text.split(" ").length;
	//? this condition ensures that the word cound doesn't increase right after a blank space
	if (text.slice(-1) === " ") {
		wordCount -= 1;
	}
	let readMinuteCount = wordCount * 0.008;

	return (
		<>
			<div className={`text-${props.textAndOutlineColor}`}>
				<div className="my-3">
					<label
						htmlFor="exampleFormControlTextarea1"
						className="form-label h3"
					>
						{props.inputLabel}
					</label>
					<textarea
						className={`form-control mt-2 mb-4 bg-transparent text-${props.textAndOutlineColor} border border-${props.textAndOutlineColor}`}
						id="myBox"
						rows="5"
						value={text}
						onChange={handleChange}
					></textarea>
					<div className={`d-flex gap-3`} ref={functionalBtns}>
						<button
							className={`btn btn-outline-${props.textAndOutlineColor} ${disabledText}`}
							onClick={handleUpClick}
						>
							Convert to Uppercase
						</button>
						<button
							className={`btn btn-outline-${props.textAndOutlineColor} ${disabledText}`}
							onClick={handleLowClick}
						>
							Convert to Lowercase
						</button>

						<button
							className={`btn btn-outline-${props.textAndOutlineColor} ${disabledText}`}
							onClick={handleCapClick}
						>
							Capitalize Words
						</button>

						<button
							className={`btn btn-outline-${props.textAndOutlineColor} ${disabledText}`}
							onClick={handleCopyText}
						>
							Copy Text
						</button>
					</div>
				</div>

				<div className="mb-4">
					<h3>Your Text Summary</h3>
					<p>
						{text !== "" ? wordCount : 0} Words,
						{text.length} Characters
					</p>
					<p>
						{text !== ""
							? `${readMinuteCount} Minute(s) read.`
							: "0 Minutes read."}
					</p>
					<h5>Preview</h5>
					<p>
						{text.length > 0 ? text : "Enter Value to see preview"}
					</p>
				</div>
			</div>
		</>
	);
}
