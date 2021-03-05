import React from "react";
import ListItem from "../ListItem/ListItem";
import Button from "../Button/Button";
import "./Aside.css";
import Icon from "../Icon/Icon";

const asideComments = [
    {
        author: "Ron Bush",
        state: "5 steps ahead of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs. NOTICE ME JEAN SENPAI PLEASE",
            buttonTitle: "Reach out to Ron"
        }
    },
    {
        author: "Ron Куст",
        state: "5 шагов ahead of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    },
    {
        author: "Рон Bush",
        state: "5 steps ahead of тебя",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    },
    {
        author: "Рон Куст",
        state: "5 шагов впереди of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    }
]

export default function Aside() {
    return (
        <div className="margin-content">
            <div className="aside">
                <ListItem title='One Step Ahead of You' secondaryTitle="Ask them how they did it..."/>
                <div className="aside-comments-wrapper">
                    {asideComments.map((comment) => {
                        return (
                            <div className="aside-comment-wrapper">
                                <ListItem icon={<Icon name="user"/>}
                                          title={comment.author}
                                          secondaryTitle={comment.state}/>
                                <div className="aside-comment">
                                    <span>{comment.comment.text}</span>
                                    <Button className="comment" icon={<Icon name="envelope" size={0.7}/>}>
                                        {comment.comment.buttonTitle}
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}