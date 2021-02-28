import React from "react";
import "./LoginPage.scss"; // Because SecurityQuestionsPage has same layout.

const utechCrestFilepath = process.env.PUBLIC_URL + "/assets/utech-crest.png";

function SecurityQuestionsPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Security Questions";
    }, []);

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        window.location.href = "/home";
    }

    return (
        <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>

            <div>
                <img src={utechCrestFilepath} />
                <h3>Security Questions</h3>
            </div>

            <div>
                <p>Answer the questions displayed and then click on the "Continue" button.</p>
            </div>

            <div>
                <label htmlFor="dob">What is your Date of Birth?</label>
                <input id="dob" type="number" placeholder="DDMMYY" required />
            </div>

            <div>
                <input className="login-submit-btn" type="submit" value="Continue" />
            </div>

        </form>
    );
}

export default SecurityQuestionsPage;