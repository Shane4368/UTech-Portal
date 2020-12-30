import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import ContainerComponent from "../../components/container/ContainerComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import AcademicInformationData from "./academic-information.json";
import FeeInformationData from "./fee-information.json";
import CareerAndPlacementsData from "./career-and-placements.json";
import StudentActionsData from "./student-actions.json";
import UsefulLinksData from "./useful-links.json";

import "../../components/container/ContainerComponent.css";
import "../home/HomePage.css"; // Because StudentPage has same layout.
import "./StudentsReports.css";

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
                    <ul>
                        <li><a href="#Academic_Information">{academicInfo.label}</a></li>
                        <li><a href="#Fee_Information">{feeInfo.label}</a></li>
                        <li><a href="#Career_Placements">{careerNPlacements.label}</a></li>
                        <li><a href="#Academic_Advisor">Academic Advisor</a></li>
                    </ul>
                </div>

                <div className="middle-panel">
                    <ContainerComponent>
                        <div id="Academic_Information" className="title bg-colour-green">
                            {academicInfo.label}
                        </div>
                        {academicInfo.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Fee_Information" className="title bg-colour-green">
                            {feeInfo.label}
                        </div>
                        {feeInfo.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Career_Placements" className="title bg-colour-green">
                            {careerNPlacements.label}
                        </div>
                        {careerNPlacements.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Academic_Advisor" className="title bg-colour-green">
                            Academic Advisor
                        </div>
                        <div className="description">
                            Information about your personal tutor
                        </div>
                        <div>Details of your advisor</div>
                    </ContainerComponent>
                </div>

                <div className="right-panel">
                    <div id="StudentsReportsContainer">
                        <div><span>Student's Reports</span></div>
                        <div>
                            Please select a report from the drop down list and click the 'Run Report' button
                            in order to view the report.
                        </div>
                        <div>
                            <select>
                                <option>-- Select Report --</option>
                                <option>Provisional Transcript of Results</option>
                                <option>Exam Timetable</option>
                                <option>Account Balance Information</option>
                                <option>Account Transactions</option>
                            </select>
                            <button>Run Report</button>
                        </div>
                    </div>

                    <ContainerComponent>
                        <div className="title bg-colour-blue">{studentActions.label}</div>
                        <div className="description">{studentActions.description}</div>
                        {studentActions.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div className="title bg-colour-dark-green">{usefulLinks.label}</div>
                        <div className="description">{usefulLinks.description}</div>
                        {usefulLinks.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default StudentPage;