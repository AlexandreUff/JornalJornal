import React from "react";
import './NavMiddle.css'

import NavMiddleButton from '../itens/NavMiddleButton'

{/* Desaparece no formato mobile */}
export default function(){
    return <nav className="navMiddle">
        <NavMiddleButton titulo="Opinião"/>
        <NavMiddleButton titulo="Política"/>
        <NavMiddleButton titulo="Economia"/>
        <NavMiddleButton titulo="Brasil"/>
        <NavMiddleButton titulo="Internacional"/>
        <NavMiddleButton titulo="Esportes"/>
        <NavMiddleButton titulo="Cultura"/>
        <NavMiddleButton titulo="Últimas"/>
        <NavMiddleButton titulo="Ciências"/>
        <NavMiddleButton titulo="Outros"/>
    </nav>
}