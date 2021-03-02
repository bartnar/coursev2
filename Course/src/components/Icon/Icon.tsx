import React, {CSSProperties, MouseEventHandler} from "react";
import classNames from "classnames";
import "./Icon.css";

interface IconProps {
    name?: string,
    onClick?: MouseEventHandler<HTMLElement> | undefined,
    className?: string,
    disabled?: boolean,
    size?: number | null
}


export default function Icon({
                                 name = "",
                                 onClick = undefined,
                                 className = "",
                                 disabled = false,
                                 size = null,
                                 ...attrs
                             }: IconProps) {


    const classes = classNames(
        'fa',
        `fa-${name}`,
        {func: onClick},
        {disabled},
        className,
    );

    const elemSize: CSSProperties = size ? {fontSize: `${size}rem`} : {fontSize: `inherit`};

    return (
        <i
            {...attrs}
            className={classes}
            onClick={disabled ? undefined : onClick}
            style={elemSize}
        />
    );
};