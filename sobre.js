import React, {Component} from "react";

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2>Sobre o ReactJS</h2>
                <ul>
                    <li>Criado em 2011 por Jordan Walke, engenheiro do Facebook, sendo implantado inicialmente internamente</li>
                    <li>Lançado open-source no ano de 2013, é usado por grandes empresas como Facebook, Instagram, Microsoft, netflix, IMDB</li>
                    <li>Permite criação de páginas interativas, com conteúdo dinâmico, rápidas respostas e alto nível de eficiência</li>
                    <li>Trabalha com fluxo de dados unidirecional, utilizando classes, pais e filhos</li>
                    <li>Utiliza o conceito de Virtual DOM, uma cópia do DOM dá página onde as alterações são realizadas
                    e posteriormente atualizadas no DOM, aumentando a velocidade da página</li>
                    <li>Utiliza a sintaxe de linguagem JSX, que mistura Javascript com os elementos do HTML</li>
                    <li>Baseado no ReactJS, foi criado para desenvolvimento mobile um framework chamado React Native</li>
                </ul>
            </div>
        );
    }
}

export default Sobre;