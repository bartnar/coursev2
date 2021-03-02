import React from "react";
import {Link} from "react-router-dom";

import './ListItem.css';
import Badge from "../Badge/Badge";
import Icon from "../Icon/Icon";

interface ListItemInterface {
    title?: string | React.ReactChildren | JSX.Element | JSX.Element[],
    secondaryTitle?: string | React.ReactChildren | JSX.Element | JSX.Element[],
    icon?: string | React.ReactChildren | JSX.Element,
    action?: string | React.ReactChildren | JSX.Element | JSX.Element[],
    to?: string,
    clickable?: boolean,
    badge?: JSX.Element,
}

export default function ListItem({
                                     title = "",
                                     secondaryTitle = "",
                                     icon = "",
                                     action = "",
                                     clickable = false,
                                     to = "",
                                     badge = <Badge value=""/>,
                                     ...attrs
                                 }: ListItemInterface) {
    return (
        <li>
            <Link to={`/${{to} || ''}`} className={clickable ? 'list-item-clickable' : 'list-item'}>
                <div className="list-item-icon-wrapper">
                    <Icon/>
                    {badge}
                </div>
                <div className="list-item-text-wrapper">
                    <span className="list-item-title">{title}</span>
                    <span className="list-item-title-secondary">{secondaryTitle}</span>
                </div>
                <span className="list-item-action">{action}</span>
            </Link>
        </li>
    )
}