import React from "react";
import Tabs from "../tabs/Tabs";
import FooterBox from "../footer/FooterBox";

import "../container/Container.css";
import "./SettingsTab.css";

function SettingsTab(): JSX.Element {
	React.useEffect(() => {
		document.title = "UTech Portal | Settings";
	});

	return (
		<div>
			<Tabs />

			<div className="Container">
				<div>
					<button>Personal Information</button>
					<button>Appearance</button>
					<button>Change Password</button>
					<button>Change Security Questions and Answers</button>
				</div>
			</div>

			<FooterBox />
		</div>
	);
}

export default SettingsTab;