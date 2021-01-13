import React from "react";
import utechCrest from "../../assets/utech-crest.png";
import "./SecurityQuestionsPage.scss";


function SecurityQuestionsPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Security Questions";
    }, []);

    function handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        window.location.href = "/home";
    }

    return (
        <div className="login-container">
            <form autoComplete="off" onSubmit={handleSubmit}>

                <div>
                    <img src={utechCrest}></img>
                    <span>Security Questions</span>
                </div>

                <div className="gray">
                    <p>Answer the questions displayed and then click on the "Continue" button.</p>
                </div>

                <div>
                    <label htmlFor="dob">What is your Date of Birth?</label>
                    <input
                        id="dob"
                        type="number"
                        placeholder="DDMMYY"
                        required>
                    </input>
                </div>

                <div>
                    <input
                        id="continue-btn"
                        type="submit"
                        value="Continue">
                    </input>
                </div>

            </form>
        </div>
    );
}

export default SecurityQuestionsPage;