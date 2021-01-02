import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./TopNavbarComponent.css";

function TopNavbarComponent(): JSX.Element {
    const pathname = useLocation().pathname;

    React.useEffect(() => {
        const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("nav a");

        links.forEach(link => {
            link.className = link.href.includes(pathname) ? "active" : "";
        });
    }, []);

    return (
        <div className="TopNavbarComponent">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/student">Student</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <NavLink to="/">Logout</NavLink>
            </nav>
        </div>
    );
}

export default TopNavbarComponent;