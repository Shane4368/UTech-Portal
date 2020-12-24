import React from "react";
import utechCrest from "../assets/utech-crest.png";
import ContainerAbsolute from "../container/ContainerAbsolute";
import "./LoginBox.css";

function handleSubmit(e: React.FormEvent): void {
	e.preventDefault();
	window.location.href = "/security-question";// Just for demo.
}

function LoginBox(): JSX.Element {
	React.useEffect(() => {
		document.title = "UTech Portal | Login";
	});

	return (
		<ContainerAbsolute>
			<form method="POST" onSubmit={handleSubmit}>

				<div className="block center">
					<img src={utechCrest} height="60px"></img>
					<h2>Login</h2>
				</div>

				<div className="block error">
					<p>
						<u><strong>For UTech Students Only:</strong></u> Enter your ID number for your username.
						If you are logging on for the first time, please use your date of birth as your password.
						The new date format is ddmmyy without the slashes. Eg: 130773
					</p>
				</div>

				<div className="block">
					<label htmlFor="username">Username:</label>
					<input
						id="username"
						className="inline-block"
						type="text"
						name="username"
						autoComplete="off"
						required>
					</input>
				</div>

				<div className="block">
					<label htmlFor="password">Password:</label>
					<input
						id="password"
						className="inline-block"
						type="password"
						name="password"
						autoComplete="off"
						required>
					</input>
				</div>

				<div className="block">
					<input
						id="login"
						type="submit"
						value="Login">
					</input>
				</div>

				<div className="block info">
					<p>
						If you have forgotten your password please enter your username above
						and then click the link below to have a new password emailed to you.
					</p>
				</div>

				<div className="block">
					<p className="hover-underline">Forgot password?</p>
				</div>

			</form>
		</ContainerAbsolute>
	);
}

export default LoginBox;