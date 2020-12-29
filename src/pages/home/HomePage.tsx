import React from "react";
import Tabs from "../tabs/Tabs";
import FooterBox from "../footer/FooterBox";

import "../container/Container.css";
import "./HomeTab.css";

type PersonalLink = {
	name: string;
	url: string;
};

function HomeTab(): JSX.Element {
	React.useEffect(() => {
		document.title = "UTech Portal | Home";
	});

	const memoizedValues = React.useMemo(() => [
		{
			label: "Notice Board",
			description: null,
			rows: [
				"Enrolment & Registration Notice for Semester 2, AY2020/21",
				"Highlights: UTech, Jamaica 2020 Graduatiing Class Celebrated in Virtual Ceremony",
				"Graduation Release - Honourary Degrees",
				"Applications open for the 2021-2022 Academic Year",
				"Acting President's Communique on Operational Plans for Semester 2, AY2020-2021",
				"Acting President's Advisory on Revised Fee Payment for Semester 2 Academic Year 2020-21",
				"Collection of Graduate Certificates",
				"UTech Jamaica Recognizes Highest Achievers from its 2020 Graduating Class"
			]
		},
		{
			label: "Intray",
			description: null,
			rows: [
				"Financial Clearance for Semester 1, 2020-21",
				"Fee Payment Reminder for Semester 1, 2020-21"
			]
		},
		{
			label: "Important Dates",
			description: "Upcoming Events 2020/2021",
			rows: [
				{ date: "August 24-Dec 11", event: "SEMESTER 1 Academic Year 2020/2021 (16 weeks)" },
				{ date: "September 07-November 09", event: "Submission of withdrawal from a module offered in Semester 1, refunds not applicable" },
				{ date: "September 14-November 09", event: "Submission of requests for withdrawal from Course of Study for Semester 1 (See Regulation 3, Student Handbook and Fee Payment Policy)" },
				{ date: "December 11, 2020", event: "Semester 1 ends" }
			]
		},
		{
			label: "Personal Links",
			description: "Use this container to store personal links to your favourite websites on the web.",
			rows: [
				{ name: "Create React App", url: "https://create-react-app.dev/" },
				{ name: "Code Syntax Highlighter", url: "http://hilite.me/" }
			]
		}
	], []);

	const personalLinks = memoizedValues.find(x => x.label === "Personal Links");
	const importantDates = memoizedValues.find(x => x.label === "Important Dates");

	return (
		<div>
			<Tabs />

			<div className="panel-container">
				<div className="left-panel">
					<a href="#Notice_Board">Notice Board</a>
					<a href="#Intray">Intray</a>
					<a href="#Personal_Links">Personal Links</a>
				</div>

				<div className="middle-panel">
					<div className="Container">
						<h5 id="Notice_Board">Notice Board</h5>
						{
							(memoizedValues.find(x => x.label === "Notice Board")?.rows as string[])
								.map((x: string) => {
									return (<p>{x}</p>);
								})
						}
					</div>

					<div className="Container">
						<h5 id="Intray">Intray</h5>
						{
							(memoizedValues.find(x => x.label === "Intray")?.rows as string[])
								.map((x: string) => {
									return (<p>{x}</p>);
								})
						}
					</div>

					<div className="Container">
						<h5 id="Personal_Links">Personal Links</h5>
						<p className="disable-underline">{personalLinks?.description}</p>
						{
							(personalLinks?.rows as PersonalLink[]).map(x => {
								return (
									<p><a href={x.url}>{x.name}</a></p>
								);
							})
						}
					</div>
				</div>

				<div className="right-panel">
					<div className="Container">
						<h5>Important Dates</h5>
						<p className="disable-underline">{importantDates?.description}</p>
						{
							(importantDates?.rows as any).map((x: any) => {
								return (
									<div>
										<div>{x.date}</div>
										<div>{x.event}</div>
									</div>
								);
							})
						}
					</div>
				</div>
			</div>

			<FooterBox />
		</div>
	);
}

export default HomeTab;