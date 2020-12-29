import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import AcademicInformationData from "./academic-information.json";
import FeeInformationData from "./fee-information.json";
import CareerAndPlacementsData from "./career-and-placements.json";
import StudentActionsData from "./student-actions.json";
import UsefulLinksData from "./useful-links.json";

import "../../components/container/ContainerComponent.css";
import "../home/HomePage.css";

function StudentPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Student";
    });

    const memoizedValues = React.useMemo(() => [
        AcademicInformationData,
        FeeInformationData,
        CareerAndPlacementsData,
        StudentActionsData,
        UsefulLinksData
    ], []);

    const [
        academicInfo,
        feeInfo,
        careerNPlacements,
        studentActions,
        usefulLinks
    ] = memoizedValues;

    return (
        <div>
            <TopNavbarComponent />

            <div className="panel-container">
                <div className="left-panel">
                    <a href="#Academic_Information">Academic Information</a>
                    <a href="#Fee_Information">Fee Information</a>
                    <a href="#Career_Placements">Career and Placements</a>
                    <a href="#Academic_Advisor">Academic Advisor</a>
                </div>

                <div className="middle-panel">
                    <div className="Container">
                        <h5 id="Academic_Information">Academic Information</h5>
                        {academicInfo?.rows.map(x => (<p>{x}</p>))}
                    </div>

                    <div className="Container">
                        <h5 id="Fee_Information">Fee Information</h5>
                        {feeInfo?.rows.map(x => (<p>{x}</p>))}
                    </div>

                    <div className="Container">
                        <h5 id="Career_Placements">Career and Placements</h5>
                        {careerNPlacements?.rows.map(x => (<p>{x}</p>))}
                    </div>

                    <div className="Container">
                        <h5 id="Academic_Advisor">Academic Advisor</h5>
                        <p className="disable-underline">
                            Information about your personal tutor
						</p>
                        <p>Details of your advisor</p>
                    </div>
                </div>

                <div className="right-panel">
                    <div className="Container">
                        <h5>Student's Reports</h5>
                        <p className="disable-underline">
                            Please select a report from the drop down list and click the 'Run Report' button
                            in order to view the report.
						</p>
                        <select>
                            <option>-- Select Report --</option>
                            <option>Provisional Transcript of Results</option>
                            <option>Exam Timetable</option>
                            <option>Account Balance Information</option>
                            <option>Account Transactions</option>
                        </select>
                        <button>Run Report</button>
                    </div>

                    <div className="Container">
                        <h5>Student Actions</h5>
                        <p className="disable-underline">
                            {studentActions?.description}
                        </p>
                        {
                            studentActions?.rows.map(x => (<p>{x}</p>))
                        }
                    </div>

                    <div className="Container">
                        <h5>Useful Links</h5>
                        <p className="disable-underline">
                            {usefulLinks?.description}
                        </p>
                        {
                            usefulLinks?.rows.map(x => (<p>{x}</p>))
                        }
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default StudentPage;