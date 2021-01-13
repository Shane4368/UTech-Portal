import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import ContainerComponent from "../../components/container/ContainerComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import AcademicInformationData from "./academic-information.json";
import FeeInformationData from "./fee-information.json";
import CareerAndPlacementsData from "./career-and-placements.json";
import StudentActionsData from "./student-actions.json";
import UsefulLinksData from "./useful-links.json";

import "../../components/container/ContainerComponent.scss";
import "../home/HomePage.scss"; // Because StudentPage has same layout.
import "./StudentsReports.scss";

function StudentPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Student";
    }, []);

    return (
        <div>
            <TopNavbarComponent />

            <div className="panel-container">
                <div className="left-panel">
                    <ul>
                        <li><a href="#Academic_Information">{AcademicInformationData.label}</a></li>
                        <li><a href="#Fee_Information">{FeeInformationData.label}</a></li>
                        <li><a href="#Career_Placements">{CareerAndPlacementsData.label}</a></li>
                        <li><a href="#Academic_Advisor">Academic Advisor</a></li>
                    </ul>
                </div>

                <div className="middle-panel">
                    <ContainerComponent>
                        <div id="Academic_Information" className="title bg-colour-green">
                            {AcademicInformationData.label}
                        </div>
                        {AcademicInformationData.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Fee_Information" className="title bg-colour-green">
                            {FeeInformationData.label}
                        </div>
                        {FeeInformationData.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Career_Placements" className="title bg-colour-green">
                            {CareerAndPlacementsData.label}
                        </div>
                        {CareerAndPlacementsData.rows.map(x => (<div>{x}</div>))}
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
                        <div className="title bg-colour-blue">{StudentActionsData.label}</div>
                        <div className="description">{StudentActionsData.description}</div>
                        {StudentActionsData.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>

                    <ContainerComponent>
                        <div className="title bg-colour-dark-green">{UsefulLinksData.label}</div>
                        <div className="description">{UsefulLinksData.description}</div>
                        {UsefulLinksData.rows.map(x => (<div>{x}</div>))}
                    </ContainerComponent>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default StudentPage;