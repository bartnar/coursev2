import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export default function Wrapper(props: any) {
    return (
        <div>
            <Header/>
            <div className="content">
                {
                    props.children
                }
                <Menu/>
            </div>
        </div>
    )
}