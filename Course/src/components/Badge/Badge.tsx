import React from "react";
import classNames from "classnames";
import "./Badge.css";

interface BadgeProps {
    value: number | undefined | string,
    circle?: boolean,
    className?: string,
    inline?: boolean,
    outer?: boolean,
    info?: boolean,
    success?: boolean,
    alert?: boolean,
    warning?: boolean
};

export default function Badge({
                                  value,
                                  circle = false,
                                  className = '',
                                  inline = false,
                                  outer = false,
                                  ...attrs
                              }: BadgeProps) {
    const text = typeof value === 'string';

    const classes = classNames(
        'badge',
        {circle},
        className,
        {inline},
        {outer},
        {text},
        {warning: attrs.warning},
        {alert: attrs.alert},
        {success: attrs.success},
        {info: attrs.info},
    );

    return (
        <span className={classes}>
      {value}
    </span>
    );
};