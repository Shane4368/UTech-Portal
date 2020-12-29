import React from "react";
import utechCrest from "../assets/utech-crest.png";
import ContainerAbsolute from "../container/ContainerAbsolute";
import "./LoginBox.css";

function handleClick(e: React.FormEvent): void {
	e.preventDefault();
	window.location.href = "/hometab";// Just for demo.
}

function SecurityQuestionBox(): JSX.Element {
	React.useEffect(() => {
		document.title = "UTech Portal | Security Questions";
	});

	return (
		<ContainerAbsolute>
			<div className="block center">
				<img src={utechCrest} height="60px"></img>
				<h2>Security Questions</h2>
			</div>

			<div className="block info">
				<p>Answer the questions displayed and then click on the "Continue" button.</p>
			</div>

			<div className="block">
				<label htmlFor="dob">What is your Date of Birth?</label>
				<input
					id="dob"
					className="inline-block"
					type="number"
					placeholder="DDMMYY"
					autoComplete="off"
					required>
				</input>
			</div>

			<div className="block">
				<input
					id="continue"
					type="submit"
					value="Continue"
					onClick={handleClick}>
				</input>
			</div>
		</ContainerAbsolute>
	);
}

export default SecurityQuestionBox;