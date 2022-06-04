import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./home";
import Sobre from "./sobre";
import Contato from "./contato";
import Game from "./jogo_da_velha";
import Logos from "./imagens";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Tiago - G1 - ReactJS</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/sobre">Sobre</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        <li><NavLink to="/jogo_da_velha">Jogo da Velha</NavLink></li>
                        <li><NavLink to="/imagens">Imagens</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/sobre" component={Sobre}/>
                        <Route path="/contato" component={Contato}/>
                        <Route path="/jogo_da_velha" component={Game}/>
                        <Route path="/imagens" component={Logos}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;