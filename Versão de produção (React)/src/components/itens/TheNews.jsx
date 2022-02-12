import React from "react";
import './TheNews.css';
import {Icone} from '../utilities/Icones'

export default function(props){

    function IconeTipo(tipo){
        switch(tipo){
            case 'Mundo': return <Icone.Mundo/>; break;
            case 'Política': return <Icone.Politica/>; break;
            case 'Opinião': return <Icone.Opiniao/>; break;
            case 'Ciência': return <Icone.Ciencia/>; break;
            case 'Economia': return <Icone.Economia/>; break;
            case 'Esporte': return <Icone.Esporte/>; break;
        }
    }

    return <article title={props.titulo} className="TheNews">
                <div style={{display: 'flex', alignItems: 'center'}} title={props.tipo}>
                   {IconeTipo(props.tipo)} <small>{props.tipo}</small> | <span title="Compartilhar"><Icone.Compartilhar/></span>
                </div>
                <a href="#">
                    <img src={props.imagem} alt={"Imagem da matéria: " + props.titulo} />
                    <h3 className={props.principal === true ? "bigger" : "smaller"}>{props.titulo}</h3>
                    {/* Caso a notícia seja principal, ela recebe um tratamento diferenciado nos estilos */}
                </a>
            </article>
}