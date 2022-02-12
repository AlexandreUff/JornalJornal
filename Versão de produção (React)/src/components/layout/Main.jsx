import React from "react";
import TheNews from "../itens/TheNews";
import Columnist from "../itens/Columnist";
import './Main.css'

import Img1 from '../../imgs/agarantio.jpg'
import Img2 from '../../imgs/BotaFogo.jpeg'
import Img3 from '../../imgs/CapitaoAmerica.jpg'
import Img4 from '../../imgs/Dhogwarts.jpg'
import Img5 from '../../imgs/JJ_Chaves1.jpeg'
import Img6 from '../../imgs/JJ_Chaves2.jpeg'
import Img7 from '../../imgs/MascaraComunitaria.png'
import Img8 from '../../imgs/minhoca.jpg'
import Img9 from '../../imgs/Nokia.jpg'
import Img10 from '../../imgs/pombo.jpg'
import Img11 from '../../imgs/rubinho.jpg'
import Img12 from '../../imgs/Stallone.jpg'
import Img13 from '../../imgs/Thanos.jpg'
import Img14 from '../../imgs/Stark.jpg'

import Col1 from '../../imgs/Col1.jpeg'
import Col2 from '../../imgs/Col2.jpg'
import Col3 from '../../imgs/Col3.png'
import Col4 from '../../imgs/Col4.jpeg'
import Col5 from '../../imgs/Col5.jpg'

export default function(){
    return <main>
        {/*Área de notícias mais importantes (No max. duas notícias). Deve, obrigatoriamente, receber o atributo 'principal' como true*/}
        <section className="mainNewsArea">
            <TheNews tipo="Mundo" imagem={Img14} principal={true} titulo="Mulher volta com ex-marido 'blipado' e atual reclama: 'Avengers filhos da...' "/>
            <TheNews tipo="Política" imagem={Img5} principal={true} titulo="Guerrilheiros ocupam vilarejo no México. O dono e um professor são assassinados"/>
        </section>

        <section className="otherNewsArea">
            {/*Area de notícias secundárias/comuns 1 (No max. 4 notícias). Deve, obrigatoriamente, receber o atributo 'principal' como false  */}
                <TheNews tipo="Esporte" imagem={Img2} principal={false} titulo="Covid: Jogos do Bota-Fogo retornam em razão do baixo risco de aglomeração"/>
                <TheNews tipo="Economia" imagem={Img12} principal={false} titulo="Indagado sobre ser PM no Rio de Janeiro, Rambo responde: 'Tenho medo!'"/>
                <TheNews tipo="Ciência" imagem={Img8} principal={false} titulo="Cientistas fazem descoberta revolucionária e confirmam: Minhocas não têm sovaco"/>
                <TheNews tipo="Opinião" imagem={Img7} principal={false} titulo="Fé na humanidade: Moradores do município de Porciúncula criam máscaras comunitárias"/>
        </section>

        {/*Área dos colunistas*/}
        <nav className="columnists">
                <h4>Nossos colunistas:</h4>
                <div className="areaDeApresentacaoColum">
                    <Columnist nome="Fausto Fanti" foto={Col1}/>
                    <Columnist nome="Bruno Sutter" foto={Col2}/>
                    <Columnist nome="Gil Brother" foto={Col3}/>
                    <Columnist nome="Felipe Fagundes" foto={Col4}/>
                    <Columnist nome="Adriano Pereira" foto={Col5}/>
                </div>
        </nav>

        <section className="otherNewsArea">
            {/*Area de notícias secundárias/comuns 2 (Num. de notícias indeterminado). Deve, obrigatoriamente, receber o atributo 'principal' como false */}
                <TheNews tipo="Economia" imagem={Img11} principal={false} titulo="Rubens Barrichello parabenizou ontem Dicaprio pelo prêmio Oscar"/>
                <TheNews tipo="Política" imagem={Img1} principal={false} titulo="Seu Creisson diz que cogita disputar a Presidência da República"/>
                <TheNews tipo="Economia" imagem={Img10} principal={false} titulo="Falso abatedouro em São Gonçalo-RJ vendia pombo como se fosse galeto"/>
                <TheNews tipo="Ciência" imagem={Img9} principal={false} titulo="Homem morre após um Nokia 3310 cair sobre sua cabeça"/>
                <TheNews tipo="Opinião" imagem={Img6} principal={false} titulo="Confusão em Hotel de Acapulco termina em tragédia após brincadeira de crianças"/>
                <TheNews tipo="Mundo" imagem={Img3} principal={false} titulo="Capitão América salva 4 pessoas de tsunami no litoral de Lagos"/>
                <TheNews tipo="Política" imagem={Img13} principal={false} titulo="Thanos fala sobre diálogo com Avengers: 'Inevitável'"/>
                <TheNews tipo="Economia" imagem={Img4} principal={false} titulo="Hogwarts abre 300 vagas para curso de operador de vassouras neste início de ano"/>
        </section>
    </main>
}