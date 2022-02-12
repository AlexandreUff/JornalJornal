import React from "react";
import './NavTopButton.css'

export default function(props){
    return <li>
        <a href="">
            <button className="but desk" title={props.titulo}>
                {props.titulo}
            </button>
            </a>
        </li>
}