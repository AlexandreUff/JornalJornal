import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import NavMiddle from './components/layout/NavMiddle';
import NavMiddleMenu from './components/itens/NavMiddleMenu';
import NavTop from './components/layout/NavTop';

import './index.css';

ReactDOM.render(
  <Fragment>

    <NavTop/> {/* Navegação do topo */}
    <Header/> {/* Títulon subtítulo e data atual da página */}
    <NavMiddle/> {/* Filtro de notícias */}
    <NavMiddleMenu/> {/* Só é exibido para mobile */}
    <Main/> {/* Area principal com as notícias */}
    <Footer/> {/* Rodapé da página */}

  </Fragment>,
  document.getElementById('root')
);

console.log(`
  .:Olá:.

  * Tecnologias usadas:
    - HTML, CSS, Javascript e React.

  * Objetivo da página:
    - Simular um site de notícias responsivo componentizado.

  * Funcionalidades Objetivas e técnicas:
    - Simular um site de notícias online responsivo com diversas funcionalidades separadas por componentes;
    - O site é criado separando cada parte do layout (Header, main, footer...) em componentes;
    - Dentro de cada componente layout, há outros componentes como notícias, botões e links;
    - Dentro também de cada um desses componentes há outros menores que representam ícones e coisas semelhantes;
    - O componente de notícia recebe um texto e uma imagem via props e, então, os renderiza na tela como notícia;
    - As notícias são separadas entre Principais e Comuns. As Principais são as duas primeiras que aparecem no início, e o restante são as notícias Comuns;
    - As notícias Principais recebem classes e estilos diferentes para darem um destaque mais coerente com o grau de importância da notícia;
    - As notícias Comuns são feitas usando o mesmo componente da notícia Principal, mas são organizadas em display 'grid' dentro menos importância que as duas primeiras chamadas Princiapais;
    - Os ícones/assuntos que aparecem no topo de cada notícia NEM SEMPRE é coerente com o assunto. Às vezes só está ali para indicar que eles existem;
    - Há um scroll-x para a área de colunistas quando o tamanho da tela começa a se aproximar do formato mobile.

    Obs: Há uma pasta do projeto na versão de produção (React) no repositório GitHub com as pastas mais importantes: 'public' e 'src'.

`);