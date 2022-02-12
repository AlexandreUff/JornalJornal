import React from "react";
import './NavTop.css'

import NavTopButton from "../itens/NavTopButton";
import NavTopMenu from "../itens/NavTopMenu";

export default function(){
    return <nav className="navTop">
        <ul>
            <NavTopButton titulo="Acervo" />
            <NavTopButton titulo="Classificados" />
            <NavTopButton titulo="Investidor" />
            <NavTopButton titulo="Imóveis" />
            <NavTopButton titulo="Mobilidade" />
            <NavTopButton titulo="Rádio" />
            <NavTopButton titulo="Saúde" />
            <NavTopMenu titulo="Menu" />
        </ul>
    </nav>
}