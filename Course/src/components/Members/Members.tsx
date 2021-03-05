import React from "react";
import "./Members.css"
import ListItem from "../ListItem/ListItem";
import Image from "../Image/Image";
import Icon from "../Icon/Icon";

const members = [
    {
        name: "Ron Bush",
        avatar: "user",
        replyIcon: "envelope"
    },
    {
        name: "Samuel Piedra",
        avatar: "user",
        replyIcon: "envelope"
    },
    {
        name: "Nathan Rodgers",
        avatar: "user",
        replyIcon: "envelope"
    },
    {
        name: "Josh Schoen",
        avatar: "user",
        replyIcon: "envelope"
    }
]

export default function Members() {
    return (
        <div className="members">
            <ListItem title="Members(32)" action={<Icon name="search"/>}/>
            <ul className="members-people-wrapper">
                {members.map(member => {
                    return (
                        <ListItem title={member.name} icon={<Image width="30" height="30" circle/>}
                                  action={<Icon name={member.replyIcon}/>}/>
                    )
                })}
            </ul>
        </div>
    )
}
