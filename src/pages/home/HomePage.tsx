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
        <div>
            <TopNavbarComponent />

            <div className="panel-container">
                <div className="left-panel">
                    <ul>
                        <li><a href="#Notice_Board">{NoticeBoardData.label}</a></li>
                        <li><a href="#Intray">{IntrayData.label}</a></li>
                        <li><a href="#Personal_Links">{PersonalLinksData.label}</a></li>
                    </ul>
                </div>

                <div className="middle-panel">
                    <ContainerComponent>
                        <div id="Notice_Board" className="title bg-colour-green">
                            {NoticeBoardData.label}
                        </div>
                        {
                            NoticeBoardData.rows.map(x => (<div>{x}</div>))
                        }
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Intray" className="title bg-colour-blue">
                            {IntrayData.label}
                        </div>
                        {
                            IntrayData.rows.map(x => (<div>{x}</div>))
                        }
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Personal_Links" className="title bg-colour-green">
                            {PersonalLinksData.label}
                        </div>
                        <div className="description">{PersonalLinksData.description}</div>
                        {
                            PersonalLinksData.rows
                                .map(x => (<div><a href={x.url}>{x.name}</a></div>))
                        }
                    </ContainerComponent>
                </div>

                <div className="right-panel">
                    <div id="ImportantDatesContainer">
                        <div><span>{ImportantDatesData.label}</span></div>
                        <table>
                            <caption>{ImportantDatesData.description}</caption>
                            {
                                ImportantDatesData.rows.map(x => {
                                    return (
                                        <tr>
                                            <td>{x.date}</td>
                                            <td>{x.event}</td>
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default HomePage;