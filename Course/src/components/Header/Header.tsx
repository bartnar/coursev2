import React from "react";
import ListItem from "../ListItem/ListItem";
import Icon from "../Icon/Icon";
import "./Header.css";
import Image from "../Image/Image";
import Nav from "../Nav/Nav";
import Badge from "../Badge/Badge";

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
                <Nav>
                    <ListItem to="progress" icon={<Icon name="chalkboard-teacher" size={1.5}/>} title="Progress"
                              clickable/>
                    <ListItem to="whatsnew" icon={<Icon name="bookmark" size={1.5}/>} title="What's New" clickable
                              badge={<Badge value={1} circle warning/>}/>
                    <ListItem to="stats" icon={<Icon name="signal" size={1.5}/>} title="Stats" clickable/>
                    <ListItem to="community" icon={<Icon name="comments" size={1.5}/>} title="Community" clickable
                              badge={<Badge value={3} circle warning/>}/>
                </Nav>
                <div className="header-right">
                    <ListItem icon={<Icon name="angle-double-right"/>} title="30%"/>
                    <ListItem icon={<Image circle height="45" width="45"/>} title={<Icon name="chevron-down"/>}/>
                </div>

            </div>

        </header>

    )
}