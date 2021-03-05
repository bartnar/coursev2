import React from "react";
import "./Comments.css";
import ListItem from "../ListItem/ListItem";
import Image from "../Image/Image";

const postMessages = [
    {
        author: 'Lyo Mann',
        text: 'Google calendar is very helpful',
        actions: ['Reply', 'Helpful', '7m']
    },
    {
        author: 'Fouad Shariff',
        text: 'I use Trello for tasks',
        actions: ['Reply', 'Helpful', '5m']
    },
    {
        author: 'Kevin Kucera (Teacher)',
        text: 'Gmail + Calendar',
        actions: ['Reply', 'Helpful', '1m']
    }
]

export default function Comments() {
    return (
        <>
            {
                postMessages.map((post) => {
                    return (
                        <ListItem icon={<Image width="30" height="30" circle/>} secondaryTitle={
                            post.actions.map((element) => {
                                return (
                                    <span className="list-item-title-secondary">{element}</span>
                                )
                            })
                        } title={<ListItem title={post.author} secondaryTitle={post.text}/>}/>
                    )
                })
            }
        </>

    )
}