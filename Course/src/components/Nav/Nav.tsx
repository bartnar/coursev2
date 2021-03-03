import React from "react";
import "./Nav.css";

interface NavProps {
    children: React.ReactChildren[] | JSX.Element | JSX.Element[]
}

export default function Nav(props: NavProps) {
    return (
        <nav>
            <ul className="nav-links">
                {props.children}
            </ul>
        </nav>
    )
}
