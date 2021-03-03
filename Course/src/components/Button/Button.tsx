import React from "react";
import classNames from "classnames";
import "./Button.css";

interface ButtonProps {
    children?: React.ReactChildren | JSX.Element | string,
    onClick?: () => void,
    className?: string,
    icon?: string | React.ReactChildren | JSX.Element,
    disabled?: boolean,
    active?: boolean,
    href?: string
}


export default function Button({
                                   children = "Empty button",
                                   onClick = () => {
                                   },
                                   className = "",
                                   disabled = false,
                                   active = false,
                                   ...attrs
                               }: ButtonProps) {


    const classes = classNames(
        "btn",
        className,
        {active},
    );

    const Tag = attrs.href ? 'a' : 'button';

    return (
        <Tag
            className={classes}
            disabled={disabled}
            onClick={() => {
            }}
            {...attrs}
        >
            <span className="list-item-icon">{attrs.icon}</span>
            {children}
        </Tag>
    );
};