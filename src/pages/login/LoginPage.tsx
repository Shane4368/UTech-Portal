import React from "react";
import "./LoginPage.scss";

const utechCrestFilepath = process.env.PUBLIC_URL + "/assets/utech-crest.png";

function LoginPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Login";
    }, []);

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        window.location.href = "/security-questions";
    }

    return (
        <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>

            <div>
                <img src={utechCrestFilepath} />
                <h3>Login</h3>
            </div>

            <div className="red">
                <p>
                    <u><strong>For UTech students only:</strong></u> Enter your ID number for your username.
                    If you are logging on for the first time, please use your date of birth as your password.
                    The new date format is ddmmyy without the slashes. Eg: 130773
                </p>
            </div>

            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" required />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" required />
            </div>

            <div>
                <input className="login-submit-btn" type="submit" value="Login" />
            </div>

            <div>
                <p>
                    If you have forgotten your password please enter your username above
                    and then click the link below to have a new password emailed to you.
                </p>
            </div>

            <div>
                <span>Forgot password?</span>
            </div>

        </form>
    );
}

export default LoginPage;