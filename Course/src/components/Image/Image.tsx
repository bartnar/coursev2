import React from "react";
import classNames from "classnames";
import "./Image.css";

interface ImageProps {
    src?: string,
    alt?: string,
    width?: string,
    height?: string,
    circle?: boolean,
    className: string
}


export default function Image({
                                  src = "",
                                  alt = "image",
                                  className = "",
                                  width = "100",
                                  height = "100",
                                  circle = false,
                                  ...attrs
                              }: ImageProps) {


    const classes = classNames(
        className,
        {circle},
    );

    if (!src) {
        src = `https://via.placeholder.com/${width}x${height}`;
    }

    return (
        <img
            src={src}
            alt={alt}
            className={classes}
            width={width}
            height={height}
            {...attrs}
        />
    );
};