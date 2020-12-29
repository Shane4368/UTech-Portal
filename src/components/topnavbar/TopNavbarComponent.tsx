import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Tabs.css";

function Tabs(): JSX.Element {
	const pathname = useLocation().pathname;

	React.useEffect(() => {
		const links = document.querySelectorAll("nav a");

		links.forEach((link: any) => {
			link.className = link.href.includes(pathname) ? "active" : "";
		});
	}, []);

	return (
		<div className="Tabs">
			<nav>
				<NavLink to="/hometab">Home</NavLink>
				<NavLink to="/studenttab">Student</NavLink>
				<NavLink to="/settingstab">Settings</NavLink>
				<NavLink to="/">Logout</NavLink>
			</nav>
		</div>
	);
}

export default Tabs;