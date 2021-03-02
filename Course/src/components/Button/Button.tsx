import React from "react";
import classNames from "classnames";
import "./Button.css";

interface ButtonProps {
    children?: React.ReactChildren | JSX.Element | string,
    onClick?: () => void,
    className?: string,
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
            {children}
        </Tag>
    );
};