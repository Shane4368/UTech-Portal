import React from "react";
import "./FooterComponent.scss";

const institutionName = "University of Technology, Jamaica";
const utechCrestFilepath = process.env.PUBLIC_URL + "/assets/utech-crest.png";

function FooterComponent(): JSX.Element {
    const handleClick = (): void => window.scrollTo(0, 0);
    const handleScroll = (): void => {
        const scrollToTopBtnStyle = document.getElementById("scroll-to-top")!.style;

        if (window.pageYOffset > 200) {
            scrollToTopBtnStyle.display = "block";
        }
        else {
            scrollToTopBtnStyle.display = "none";
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="FooterComponent">
            <button id="scroll-to-top" onClick={handleClick}>Scroll to top</button>

            <div className="flex-container">
                <div className="institution">
                    <div><img alt="UTech Crest" src={utechCrestFilepath} /></div>

                    <div>
                        <address>
                            <span>{institutionName}</span>
                            <p>
                                237 Old Hope Road, Kingston 6, Jamaica W.I.<br />
                                Tel: (876) 927-1680-8<br />
                                Fax: (876) 977-4388 | (876) 927-1925
                            </p>
                        </address>
                    </div>
                </div>

                <div>
                    <span>Social Media</span>
                    <ul>
                        <li>
                            <a target="_blank"
                                rel="noreferrer nofollow"
                                href="https://www.facebook.com/UTechJa/">Facebook
                            </a>
                        </li>
                        <li>
                            <a target="_blank"
                                rel="noreferrer nofollow"
                                href="https://www.instagram.com/utechjamaica/">Instagram
                            </a>
                        </li>
                        <li>
                            <a target="_blank"
                                rel="noreferrer nofollow"
                                href="https://twitter.com/utechjamaica">Twitter
                            </a>
                        </li>
                        <li>
                            <a target="_blank"
                                rel="noreferrer nofollow"
                                href="https://www.youtube.com/user/utechjamaica">YouTube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <p>Copyright © 2021 {institutionName}. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default FooterComponent;