import React from "react";
import TopNavbarComponent from "../../components/topnavbar/TopNavbarComponent";
import FooterComponent from "../../components/footer/FooterComponent";

import NoticeBoardData from "./notice-board.json";
import IntrayData from "./intray.json";
import ImportantDatesData from "./important-dates.json";
import PersonalLinksData from "./personal-links.json";

import "../../components/container/ContainerComponent.css";
import "./HomePage.css";

type PersonalLink = {
    name: string;
    url: string;
};

function HomePage(): JSX.Element {
    React.useEffect(() => {
        document.title = "UTech Portal | Home";
    });

    const memoizedValues = React.useMemo(() => [
        NoticeBoardData, IntrayData, ImportantDatesData, PersonalLinksData
    ], []);

    const personalLinks = memoizedValues.find(x => x.label === "Personal Links");
    const importantDates = memoizedValues.find(x => x.label === "Important Dates");

    return (
        <div>
            <TopNavbarComponent />

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

            <FooterComponent />
        </div>
    );
}

export default HomePage;