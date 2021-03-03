import React from "react";
import "./Menu.css"
import ListItem from "../ListItem/ListItem";
import Icon from "../Icon/Icon";

export default function Menu() {
    return (
        <div className="margin-content">
            <div className="menu-wrapper">
                <div className="menu">
                    <ListItem clickable title="Everything"
                              icon={<Icon name="house-user" size={1.5}/>}/>
                    <ListItem clickable title="Accountability Group"
                              icon={<Icon name="user-friends" size={1.5}/>}
                              action="+2"/>
                    <ListItem clickable title="All Discussions"
                              icon={<Icon name="comments-dollar" size={1.5}/>}/>
                    <ListItem clickable title="Messages"
                              icon={<Icon name="envelope-open-text" size={1.5}/>}
                              action="+1"/>
                    <ListItem clickable title="My Activity" icon={<Icon name="book" size={1.5}/>}/>
                </div>
                <ListItem clickable secondaryTitle="See All"/>
            </div>
        </div>
    )
}