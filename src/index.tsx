import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LoginBox from "./login/LoginBox";
import SecurityQuestionBox from "./login/SecurityQuestionBox";
import HomeTab from "./home/HomeTab";
import StudentTab from "./student/StudentTab";
import SettingsTab from "./settings/SettingsTab";

import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<LoginBox />
				</Route>
				<Route exact path="/security-question">
					<SecurityQuestionBox />
				</Route>
				<Route exact path="/hometab">
					<HomeTab />
				</Route>
				<Route exact path="/studenttab">
					<StudentTab />
				</Route>
				<Route exact path="/settingstab">
					<SettingsTab />
				</Route>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);