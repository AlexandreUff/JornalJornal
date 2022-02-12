import React from "react";
import './Footer.css'

import { Icone } from '../utilities/Icones'

export default function () {
    return <footer>
        <nav className="socialMedia"> {/* Substituir por nav */}
            <ul>
                <li>
                    <a href="https://pt-br.facebook.com/" title="Facebook">
                        <Icone.Facebook />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" title="Instagram">
                        <Icone.Instagram />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" title="Twitter">
                        <Icone.Twitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" title="YouTube">
                        <Icone.YouTube />
                    </a>
                </li>
            </ul>
        </nav>

        <nav className="navFooter">
            <ul>
                <li><a href="" title="Termos de uso">Termos de uso</a></li>
                <li><a href="" title="Código de ética">Código de ética</a></li>
                <li><a href="" title="Demonstrações contábeis">Demonstrações contábeis</a></li>
                <li><a href="" title="Publicidade">Publicidade</a></li>
                <li><a href="" title="Gráfica">Gráfica</a></li>
                <li><a href="" title="Fale conosco">Fale conosco</a></li>
            </ul>
        </nav>

        <div className="credits">
            <small>&copy; 2022 - Alexandre Magno Dias</small>
        </div>
    </footer>
}