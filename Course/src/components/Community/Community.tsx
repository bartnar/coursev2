import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import ListItem from "../ListItem/ListItem";
import "./Community.css";

const titleActionData = ['RECENT', 'BY MILESTONE'];

export default function Community() {
    return (
        <Wrapper>
            <div className="comments-section">
                <ListItem title="My Accountability Group" action={titleActionData.map((el) => {
                    return (
                        <span className="list-item-title-secondary">{el}</span>
                    )
                })}/>
                Posts
            </div>
        </Wrapper>
    )
}