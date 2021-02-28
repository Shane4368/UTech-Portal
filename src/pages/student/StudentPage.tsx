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
        <div className="root-content-container">
            <TopNavbarComponent />

            <div className="panel-left">
                <ul>
                    <li>
                        <a href="#AcademicInformation">{AcademicInformationData.label}</a>
                    </li>
                    <li>
                        <a href="#FeeInformation">{FeeInformationData.label}</a>
                    </li>
                    <li>
                        <a href="#CareerPlacements">{CareerAndPlacementsData.label}</a>
                    </li>
                    <li>
                        <a href="#AcademicAdvisor">Academic Advisor</a>
                    </li>
                    <li>
                        <a href="#StudentsReports">Student's Reports</a>
                    </li>
                    <li>
                        <a href="#StudentActions">{StudentActionsData.label}</a>
                    </li>
                    <li>
                        <a href="#UsefulLinks">{UsefulLinksData.label}</a>
                    </li>
                </ul>
            </div>

            <main className="main-container">
                <div>
                    <ContainerComponent
                        id="AcademicInformation"
                        title={AcademicInformationData.label}
                        colour="colour-bg-green">
                        {AcademicInformationData.rows.map(x => (<tr><td><span>{x}</span></td></tr>))}
                    </ContainerComponent>

                    <ContainerComponent
                        id="FeeInformation"
                        title={FeeInformationData.label}
                        colour="colour-bg-green">
                        {FeeInformationData.rows.map(x => (<tr><td><span>{x}</span></td></tr>))}
                    </ContainerComponent>

                    <ContainerComponent
                        id="CareerPlacements"
                        title={CareerAndPlacementsData.label}
                        colour="colour-bg-green">
                        {CareerAndPlacementsData.rows.map(x => (<tr><td><span>{x}</span></td></tr>))}
                    </ContainerComponent>

                    <ContainerComponent
                        id="AcademicAdvisor"
                        title="Academic Advisor"
                        colour="colour-bg-green">
                        <tr>
                            <td className="description">Information about your personal tutor</td>
                        </tr>
                        <tr><td>Details of your advisor</td></tr>
                    </ContainerComponent>
                </div>

                <div>
                    <ContainerComponent id="StudentsReports" title="Student's Reports">
                        <tr>
                            <td className="description">
                                Please select a report from the drop down list and click the 'Run Report' button
                                in order to view the report.
                            </td>
                        </tr>
                        <tr>
                            <td className="flex-container">
                                <select defaultValue="-- Select Report --">
                                    <option>-- Select Report --</option>
                                    <option>Provisional Transcript of Results</option>
                                    <option>Exam Timetable</option>
                                    <option>Account Balance Information</option>
                                    <option>Account Transactions</option>
                                </select>
                                <button>Run Report</button>
                            </td>
                        </tr>
                    </ContainerComponent>

                    <ContainerComponent
                        id="StudentActions"
                        title={StudentActionsData.label}
                        colour="colour-bg-blue">
                        <tr><td className="description">{StudentActionsData.description}</td></tr>
                        {StudentActionsData.rows.map(x => (<tr><td><span>{x}</span></td></tr>))}
                    </ContainerComponent>

                    <ContainerComponent
                        id="UsefulLinks"
                        title={UsefulLinksData.label}
                        colour="colour-bg-green-dark">
                        <tr><td className="description">{UsefulLinksData.description}</td></tr>
                        {UsefulLinksData.rows.map(x => (<tr><td><span>{x}</span></td></tr>))}
                    </ContainerComponent>
                </div>
            </main>

            <FooterComponent />
        </div>
    );
}

export default StudentPage;