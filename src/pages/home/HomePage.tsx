import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import ContainerComponent from "../../components/container/ContainerComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import NoticeBoardData from "./notice-board.json";
import IntrayData from "./intray.json";
import ImportantDatesData from "./important-dates.json";
import PersonalLinksData from "./personal-links.json";

import "../../components/container/ContainerComponent.scss";
import "./ImportantDates.scss";
import "./HomePage.scss";

function HomePage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Home";
    }, []);

    return (
        <div className="root-content-container">
            <TopNavbarComponent />

            <div className="panel-left">
                <ul>
                    <li>
                        <a href="#NoticeBoard">{NoticeBoardData.label}</a>
                    </li>
                    <li>
                        <a href="#Intray">{IntrayData.label}</a>
                    </li>
                    <li>
                        <a href="#PersonalLinks">{PersonalLinksData.label}</a>
                    </li>
                    <li>
                        <a href="#ImportantDates">{ImportantDatesData.label}</a>
                    </li>
                </ul>
            </div>

            <main className="main-container">
                <div>
                    <ContainerComponent
                        id="NoticeBoard"
                        title={NoticeBoardData.label}
                        colour="colour-bg-green">
                        {
                            NoticeBoardData.rows.map(x => (
                                <tr><td><span>{x}</span></td></tr>
                            ))
                        }
                    </ContainerComponent>

                    <ContainerComponent
                        id="Intray"
                        title={IntrayData.label}
                        colour="colour-bg-blue">
                        {
                            IntrayData.rows.map(x => (
                                <tr><td><span>{x}</span></td></tr>
                            ))
                        }
                    </ContainerComponent>

                    <ContainerComponent
                        id="PersonalLinks"
                        title={PersonalLinksData.label}
                        colour="colour-bg-green">
                        <tr>
                            <td className="description">
                                {PersonalLinksData.description}
                            </td>
                        </tr>
                        {
                            PersonalLinksData.rows.map(x => (
                                <tr>
                                    <td>
                                        <a target="_blank"
                                            rel="noreferrer"
                                            href={x.url}>{x.name}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </ContainerComponent>
                </div>

                <div>
                    <ContainerComponent id="ImportantDates" title={ImportantDatesData.label}>
                        <tr>
                            <td className="description" colSpan={2}>
                                {ImportantDatesData.description}
                            </td>
                        </tr>
                        {
                            ImportantDatesData.rows.map(x => (
                                <tr>
                                    <td>{x.date}</td>
                                    <td>{x.event}</td>
                                </tr>
                            ))
                        }
                    </ContainerComponent>
                </div>
            </main>

            <FooterComponent />
        </div>
    );
}

export default HomePage;