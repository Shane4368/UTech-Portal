import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import ContainerComponent from "../../components/container/ContainerComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import NoticeBoardData from "./notice-board.json";
import IntrayData from "./intray.json";
import ImportantDatesData from "./important-dates.json";
import PersonalLinksData from "./personal-links.json";

import "../../components/container/ContainerComponent.css";
import "./ImportantDates.css";
import "./HomePage.css";

type PersonalLink = {
    name: string;
    url: string;
};

type ImportantDate = {
    date: string;
    event: string;
};

function HomePage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Home";
    }, []);

    const memoizedValues = React.useMemo(() => [
        NoticeBoardData, IntrayData, ImportantDatesData, PersonalLinksData
    ], []);

    const [noticeBoard, intray, importantDates, personalLinks] = memoizedValues;

    return (
        <div>
            <TopNavbarComponent />

            <div className="panel-container">
                <div className="left-panel">
                    <ul>
                        <li><a href="#Notice_Board">{noticeBoard.label}</a></li>
                        <li><a href="#Intray">{intray.label}</a></li>
                        <li><a href="#Personal_Links">{personalLinks.label}</a></li>
                    </ul>
                </div>

                <div className="middle-panel">
                    <ContainerComponent>
                        <div id="Notice_Board" className="title bg-colour-green">
                            {noticeBoard.label}
                        </div>
                        {
                            (noticeBoard.rows as string[])
                                .map(x => (<div>{x}</div>))
                        }
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Intray" className="title bg-colour-blue">
                            {intray.label}
                        </div>
                        {
                            (intray.rows as string[]).map(x => (<div>{x}</div>))
                        }
                    </ContainerComponent>

                    <ContainerComponent>
                        <div id="Personal_Links" className="title bg-colour-green">
                            {personalLinks.label}
                        </div>
                        <div className="description">{personalLinks.description}</div>
                        {
                            (personalLinks.rows as PersonalLink[])
                                .map(x => (<div><a href={x.url}>{x.name}</a></div>))
                        }
                    </ContainerComponent>
                </div>

                <div className="right-panel">
                    <div id="ImportantDatesContainer">
                        <div><span>{importantDates.label}</span></div>
                        <table>
                            <caption>{importantDates.description}</caption>
                            {
                                (importantDates.rows as ImportantDate[]).map(x => {
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