import React from "react";
import ListItem from "../ListItem/ListItem";
import Icon from "../Icon/Icon";
import "./Header.css";
import Image from "../Image/Image";

export default function Header() {
    return (

        <header className="header">
            <div className="margin-content">
                <div className="header-left">
                    <div className="header-logo">Result Jam</div>
                    <select id="dropdown" className="header-dropdown">
                        <option value="starters">Starters</option>
                        <option value="another">Another</option>
                        <option value="whatever">Whatever</option>
                    </select>
                </div>

                {/*navigation*/}
                <div className="header-right">
                    <ListItem icon={<Icon name="angle-double-right"/>} title="30%"/>
                    <ListItem icon={<Image circle height="35" width="35"/>} title={<Icon name="chevron-down"/>}/>
                </div>

            </div>

        </header>

    )
}