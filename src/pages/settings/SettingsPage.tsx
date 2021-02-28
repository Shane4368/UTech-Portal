import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import { getTheme, setTheme } from "../../common/theme";

import "../../components/container/ContainerComponent.scss";
import "./SettingsPage.scss";

function SettingsPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Settings";

        const theme = getTheme();
        const themeBtns = document.getElementsByClassName("theme-btn") as HTMLCollectionOf<HTMLButtonElement>;

        for (const themeButton of themeBtns) {
            const themeType = themeButton.id.split("-").pop();

            if (themeType === theme) {
                themeButton.classList.add("active");
                return;
            }
        }
    }, []);

    function handleButtonClick(e: React.MouseEvent): void {
        let id: string;
        const textContent = (e.target as HTMLButtonElement).textContent;

        switch (textContent) {
            case "Personal Information":
                id = "PersonalInformation";
                break;
            case "Appearance":
                id = "Appearance";
                break;
            case "Change Password":
                id = "ChangePassword";
                break;
            default:
                id = "QuestionsNAnswers";
        }

        const containers = document.getElementsByClassName("container") as HTMLCollectionOf<HTMLDivElement>;

        for (const container of containers) {
            if (container.classList.contains("selected")) {
                if (container.id === id) return;

                container.classList.remove("selected");
                break;
            }
        }

        document.getElementById(id)?.classList.add("selected");
    }

    function handleThemeClick(e: React.MouseEvent): void {
        const button = e.target as HTMLButtonElement;
        const themeBtns = document.getElementsByClassName("theme-btn") as HTMLCollectionOf<HTMLButtonElement>;

        for (const themeButton of themeBtns) {
            const isClicked = themeButton.id === button.id;

            if (isClicked && themeButton.classList.contains("active"))
                return;

            if (!isClicked)
                themeButton.classList.remove("active");
            else
                themeButton.classList.add("active");
        }

        if (button.id === "theme-btn-dark")
            setTheme("dark");
        else if (button.id === "theme-btn-light")
            setTheme("light");
        else
            setTheme("system");
    }

    return (
        <div className="root-content-container">
            <TopNavbarComponent />

            <div className="panel-left">
                <button onClick={handleButtonClick}>Personal Information</button>
                <button onClick={handleButtonClick}>Appearance</button>
                <button onClick={handleButtonClick}>Change Password</button>
                <button onClick={handleButtonClick}>Change Security Questions and Answers</button>
            </div>

            <main className="main-container settings">

                <div id="PersonalInformation" className="container selected">
                    <div>
                        <h3>Personal Information</h3>
                        <p>
                            This screen allows you to modify the personal details that are stored on your record.
                            If a field has an asterisk (*) beside it then that field is mandatory and must contain
                            a value. Fields that are highlighted in grey are non-editable and their values cannot
                            be changed online. If there are any changes to your name, marital status or nationality
                            you must contact the Records Office. All other fields are both optional and editable.
                            Please provide as much information as possible.
                        </p>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Field Name</th>
                                    <th>Field Value</th>
                                    <th>Translation</th>
                                </tr>
                                <tr>
                                    <td>Student Code</td>
                                    <td><input type="number" value="0000000" disabled /></td>
                                    <td>Someone Suspicious</td>
                                </tr>
                                <tr>
                                    <td>Title*</td>
                                    <td>
                                        <select defaultValue="Mr">
                                            <option>-- Select title --</option>
                                            <option>Captain</option>
                                            <option>Dr</option>
                                            <option>Major</option>
                                            <option>Miss</option>
                                            <option>Mr</option>
                                            <option>Mrs</option>
                                            <option>Ms</option>
                                            <option>Pastor</option>
                                            <option>Professor</option>
                                            <option>Reverend</option>
                                            <option>Sir</option>
                                            <option>Sister</option>
                                        </select>
                                    </td>
                                    <td>Mr</td>
                                </tr>
                                <tr>
                                    <td>Surname</td>
                                    <td><input value="SUSPICIOUS" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Former Name</td>
                                    <td><input disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Forename 1</td>
                                    <td><input value="SOMEONE" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Forname 2</td>
                                    <td><input disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Forename 3</td>
                                    <td><input disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Forename used*</td>
                                    <td><input value="SOMEONE" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Full/Official Name</td>
                                    <td><input value="Someone Suspicious" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td><input value="M" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Date of Birth*</td>
                                    <td><input value="31/Dec/2020" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>TRN (without dashes)</td>
                                    <td><input type="number" value="123456789" disabled /></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Marital Status</td>
                                    <td><input value="S" disabled /></td>
                                    <td>SINGLE</td>
                                </tr>
                                <tr>
                                    <td>Nationality</td>
                                    <td><input type="number" value="680" disabled /></td>
                                    <td>JAMAICAN</td>
                                </tr>
                                <tr>
                                    <td>Country of Birth*</td>
                                    <td><input type="number" value="680" disabled /></td>
                                    <td>JAMAICA</td>
                                </tr>
                                <tr>
                                    <td>Country of Residence</td>
                                    <td><input type="number" value="680" disabled /></td>
                                    <td>JAMAICA</td>
                                </tr>
                                <tr>
                                    <td>Disability</td>
                                    <td>
                                        <select defaultValue="NO DISABILITY">
                                            <option>-- Select disability --</option>
                                            <option>BLIND/PARTIALLY SIGHTED</option>
                                            <option>DEAF/HEARING IMPAIRMENT</option>
                                            <option>DYSLEXIA</option>
                                            <option>INFORMATION NOT SOUGHT</option>
                                            <option>MENTAL HEALTH DIFFICULTY</option>
                                            <option>MULTIPLE DISABILITY</option>
                                            <option>NO DISABILITY</option>
                                            <option>NOT KNOWN</option>
                                            <option>OTHER DISABILITY</option>
                                            <option>PERSONAL CARE SUPPORT</option>
                                            <option>UNSEEN DISABILITY EG DIABETES, EPILEPSY</option>
                                            <option>WHEELCHAIR USER/MOBILITY DIFFICULTY</option>
                                        </select>
                                    </td>
                                    <td>NO DISABILITY</td>
                                </tr>
                                <tr>
                                    <td>Highest Education Level</td>
                                    <td>
                                        <select defaultValue="CAPE 2">
                                            <option>-- Select education level --</option>
                                            <option>Accreditation of Prior (Experimental) Learning</option>
                                            <option>Associate Degree</option>
                                            <option>Bachelor's Degree</option>
                                            <option>CAPE 1</option>
                                            <option>CAPE 2</option>
                                            <option>CXC</option>
                                            <option>Certificate - Postgraduate</option>
                                            <option>Certificate - Undergraduate</option>
                                            <option>GCE 'A'</option>
                                            <option>GCE 'AS' Levels</option>
                                            <option>GCE 'O'</option>
                                            <option>Grade 11 of High School</option>
                                            <option>Grade 12 of High School</option>
                                            <option>Grade 9 of High School</option>
                                            <option>Master's Degree</option>
                                            <option>Mature stu admitted on prev exp/ins entrance exam</option>
                                            <option>Mixed CAPE and GCE 'A'</option>
                                            <option>Mixed CAPE and GCE 'O'</option>
                                            <option>No Formal Qualification</option>
                                            <option>Not Known</option>
                                            <option>Overseas High School</option>
                                            <option>PhD Degree</option>
                                            <option>Professional Qualifications</option>
                                        </select>
                                    </td>
                                    <td>CAPE 2</td>
                                </tr>
                                <tr>
                                    <td>Who will pay your fees?</td>
                                    <td>
                                        <select defaultValue="PARENTS">
                                            <option>-- Select option --</option>
                                            <option>JAMAICAN GOVT</option>
                                            <option>OTHER</option>
                                            <option>OTHER FAMILY</option>
                                            <option>OVERSEAS GOVT</option>
                                            <option>PARENTS</option>
                                            <option>PRIVATE</option>
                                            <option>SELF</option>
                                            <option>SLB</option>
                                        </select>
                                    </td>
                                    <td>PARENTS</td>
                                </tr>
                                <tr>
                                    <td>Religion</td>
                                    <td>
                                        <select defaultValue="CHRISTIANITY">
                                            <option>-- Select religion --</option>
                                            <option>BUDDHISM</option>
                                            <option>CHRISTIANITY</option>
                                            <option>HINDUISM</option>
                                            <option>JEW</option>
                                            <option>MUSLIM</option>
                                            <option>RASTAFARIANISM</option>
                                        </select>
                                    </td>
                                    <td>CHRISTIANITY</td>
                                </tr>
                                <tr>
                                    <td>Denomination</td>
                                    <td>
                                        <select defaultValue="-- Select denomination --">
                                            <option>-- Select denomination --</option>
                                            <option>ADVENTIST</option>
                                            <option>ANGLICAN</option>
                                            <option>BAPTIST</option>
                                            <option>BRETHREN</option>
                                            <option>CATHOLIC</option>
                                            <option>CHURCH OF CHRIST</option>
                                            <option>JEHOVAH WITNESS</option>
                                            <option>METHODIST</option>
                                            <option>MISSIONARY</option>
                                            <option>MORVIAN</option>
                                            <option>MORMON</option>
                                            <option>NON-DENOMINATION</option>
                                            <option>OTHER</option>
                                            <option>PENTECOSTAL</option>
                                            <option>PRESBYTERIAN</option>
                                        </select>
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Institution Email</td>
                                    <td><input value="SOMEONESUSPICIOUS@students.utech.edu.jm" disabled /></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div><button>Save personal information</button></div>
                </div>

                <div id="Appearance" className="container">
                    <div><h3>Appearance</h3></div>
                    <div>
                        <button id="theme-btn-light" className="theme-btn" onClick={handleThemeClick}>
                            <div id="theme-box-light"></div>
                            <div className="theme-name">Light</div>
                        </button>
                        <button id="theme-btn-dark" className="theme-btn" onClick={handleThemeClick}>
                            <div id="theme-box-dark"></div>
                            <div className="theme-name">Dark</div>
                        </button>
                        <button id="theme-btn-system" className="theme-btn" onClick={handleThemeClick}>
                            <div id="theme-box-system"></div>
                            <div className="theme-name">System</div>
                        </button>
                    </div>
                </div>

                <div id="ChangePassword" className="container">
                    <div><h3>Change Password</h3></div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Enter current password</td>
                                    <td><input /></td>
                                </tr>
                                <tr>
                                    <td>Enter new password</td>
                                    <td><input /></td>
                                </tr>
                                <tr>
                                    <td>Confirm new password</td>
                                    <td><input /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div id="QuestionsNAnswers" className="container">
                    <div>
                        <h3>Security Questions and Answers</h3>
                        <p>Enter password to change security questions and password.</p>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Enter password</td>
                                    <td><input /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>

            <FooterComponent />
        </div>
    );
}

export default SettingsPage;