import React from "react";
import './Columnist.css'

export default function(props){
    return <div className="ColumArea" title={props.nome}>
                <a href="#">
                    <img src={props.foto} alt={"Foto do colunista " + props.nome} />
                    <h5>{props.nome}</h5>
                </a>
            </div>
}