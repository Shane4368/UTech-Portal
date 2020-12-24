import React from "react";
import Tabs from "../tabs/Tabs";
import FooterBox from "../footer/FooterBox";

import "../container/Container.css";
import "../home/HomeTab.css";

function StudentTab(): JSX.Element {
	React.useEffect(() => {
		document.title = "UTech Portal | Student";
	});

	const memoizedValues = React.useMemo(() => [
		{
			label: "Academic Information",
			description: null,
			rows: [
				"Exam Module Check List (2019/20 SEM1)",
				"Module Taking Records",
				"Exemption Credits Earned",
				"Provisional Coursework Results",
				"Provisional Re-sit Coursework Results",
				"Provisional Module Results",
				"Provisional Progression Results",
				"Provisional Award Details"
			]
		},
		{
			label: "Fee Information",
			description: null,
			rows: [
				"Sponsorship Information",
				"Grant Information",
				"Payments to Your Account",
				"Your Account Transactions"
			]
		},
		{
			label: "Career and Placements",
			description: null,
			rows: [
				"Student Placement Application",
				"Student CV",
				"Student Placement List"
			]
		},
		{
			label: "Student Actions",
			description: "A list of the tasks that you must perform as a student.",
			rows: [
				"View Your Fee Schedule",
				"Electives Handbook",
				"The Module Database",
				"Evaluate Lecturers/Modules (2015/16 SEM2)"
			]
		},
		{
			label: "Useful Links",
			description: "Select any of these links to connect to appropriate Student related web contect.",
			rows: [
				"Undergraduate Student Handbook",
				"HOW TO ACCESS PAST PAPERS",
				"Scholarship Application Form",
				"Absence from Examination Form",
				"Student Medical Release of Information Form",
				"Papine Campus Guide",
				"UTech's Web Site",
				"Student Loan Bureau Information",
				"NCB Jamaica Ltd.",
				"Paymaster (Jamaica) Limited",
				"Jamaican Gleaner",
				"Jamaica Observer Internet Edition",
				"Northern Light Business Research Engine"
			]
		}
	], []);

	const academicInfo = memoizedValues.find(x => x.label === "Academic Information");
	const feeInfo = memoizedValues.find(x => x.label === "Fee Information");
	const careerNPlacements = memoizedValues.find(x => x.label === "Career and Placements");
	const studentActions = memoizedValues.find(x => x.label === "Student Actions");
	const usefulLinks = memoizedValues.find(x => x.label === "Useful Links");

	return (
		<div>
			<Tabs />

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

			<FooterBox />
		</div>
	);
}

export default StudentTab;