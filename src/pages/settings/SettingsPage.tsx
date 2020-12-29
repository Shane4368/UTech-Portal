import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import "../../components/container/ContainerComponent.css";
import "./SettingsPage.css";

function SettingsPage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Settings";
    });

    return (
        <div>
            <TopNavbarComponent />

            <div className="Container">
                <div>
                    <button>Personal Information</button>
                    <button>Appearance</button>
                    <button>Change Password</button>
                    <button>Change Security Questions and Answers</button>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default SettingsPage;