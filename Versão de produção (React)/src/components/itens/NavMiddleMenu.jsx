import React from "react";
import './NavMiddleMenu.css'

import NavMiddleButton from "./NavMiddleButton";

export default function () {
    {/* Só é exibido no formato mobile */}
    return <details>
        <summary> Ver mais </summary>
        <nav className="navMiddleHidden">
            <NavMiddleButton titulo="Opinião" />
            <NavMiddleButton titulo="Política" />
            <NavMiddleButton titulo="Economia" />
            <NavMiddleButton titulo="Brasil" />
            <NavMiddleButton titulo="Internacional" />
            <NavMiddleButton titulo="Esportes" />
            <NavMiddleButton titulo="Cultura" />
            <NavMiddleButton titulo="Últimas" />
            <NavMiddleButton titulo="Ciências" />
            <NavMiddleButton titulo="Outros" />
        </nav>
    </details>
}