import React, {Component} from "react";
import Relogio from "./relogio";

class Home extends Component {
    render() {
        return (
            <div>
                <Relogio/>
                <h2>Olá! Bem vindo!</h2>
                <p>Página de testes ReactJS para o trabalho de G1 sobre bibliotecas Javascript.
                    Este trabalho utiliza a biblitoeca ReactJS, criada e mantida pelo
                    Facebook desde 2011. Aqui algumas funções e recursos desta biblioteca são apresentadas.</p>
            </div>
        );
    }
}

export default Home;