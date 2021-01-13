import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import SecurityQuestionsPage from "./pages/login/SecurityQuestionsPage";
import HomePage from "./pages/home/HomePage";
import StudentPage from "./pages/student/StudentPage";
import SettingsPage from "./pages/settings/SettingsPage";

import "./index.scss";

function App(): JSX.Element {
    React.useEffect(() => {
        if (localStorage.getItem("theme") === "dark")
            document.documentElement.setAttribute("data-theme", "dark");
    }, []);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <LoginPage />
                    </Route>
                    <Route exact path="/security-questions">
                        <SecurityQuestionsPage />
                    </Route>
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                    <Route exact path="/student">
                        <StudentPage />
                    </Route>
                    <Route exact path="/settings">
                        <SettingsPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));