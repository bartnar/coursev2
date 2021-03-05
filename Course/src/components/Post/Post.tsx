import React from "react";
import "./Post.css";
import ListItem from "../ListItem/ListItem";
import Image from "../Image/Image";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import Comments from "../Comments/Comments";

const postData = [
    {
        title: "What are some tools every startup should have?",
        secondaryTitle: "James Dilon in Top Ads Copied By Hand",
        text: "Well it's 2021 and new tools have come out and the good old ones have stayed. Since I've decided to start a small freelancer company, what are some tools ever...",
        likes: "3",
        comments: "5 comments",
        time: "7h ago"
    }
]

const postComments = [
    {
        author: 'Lyo Mann',
        text: 'Google calendar is very helpful',
        actions: ['Reply', 'Helpful', '2m']
    },
    {
        author: 'Fouad Shariff',
        text: 'I use Trello for tasks',
        actions: ['Reply', 'Helpful', '2m']
    },
    {
        author: 'Kevin Kucera (Teacher)',
        text: 'Gmail + Calendar',
        actions: ['Reply', 'Helpful', '2m']
    }
];

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

export default function Post() {
    return (
        <div className="post-wrapper">
            {postData.map((post) => {
                return (
                    <>
                        <ListItem icon={<Image height="50" width="50" circle/>} title={post.title} action={post.time}
                                  secondaryTitle={post.secondaryTitle}/>
                        <div className="post-text">{post.text}</div>
                        <div className="post-reactions">
                            <ListItem clickable icon={<Icon name="thumbs-up"/>} secondaryTitle={post.likes}/>
                            <span></span>
                            <ListItem secondaryTitle={post.comments}/>
                        </div>
                        <div className="post-buttons-wrapper">
                            <Button className="post-button" icon={<Icon name="thumbs-up"/>}>Like</Button>
                            <Button className="post-button" icon={<Icon name="comments"/>}>Comment</Button>
                        </div>
                        <div className="post-messages-wrapper">
                            <Comments/>
                        </div>
                        <div className="post-reply">
                            <ListItem icon={<Image width="30" height="30" circle/>}/>
                            <input placeholder="Write a comment..."/>
                        </div>
                    </>

                )
            })}
            <ListItem/>
        </div>
    )
}