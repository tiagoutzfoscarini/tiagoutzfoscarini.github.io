import React, {Component} from "react";
import "./imagens.css";

// problema ao usar imagem local
const imagens = {
    react: {
        src: "https://i.imgur.com/nKbu4ph.png",
        title: 'ReactJS'
    },
    faccat: {
        src: "https://i.imgur.com/pj98wER.png",
        title: 'Faccat'
    },
    tiFaccat: {
        src: "https://i.imgur.com/M9om9Q9.png",
        title: 'Ti Faccat'
    }
}

class Logos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: imagens.react.src,
            alt: imagens.react.title
        }
        this.trocarImagem = this.trocarImagem.bind(this);
    }

    trocarImagem() {
        if (this.state.alt === imagens.react.title) {
            this.setState({src: imagens.faccat.src, alt: imagens.faccat.title});
        } else if (this.state.alt === imagens.faccat.title) {
            this.setState({src: imagens.tiFaccat.src, alt: imagens.tiFaccat.title});
        } else {
            this.setState({src: imagens.react.src, alt: imagens.react.title});
        }
    }

    render() {
        return (
            <div className="imagens">
                <img
                    src={this.state.src}
                    alt={this.state.title}
                />
                <br/>
                <button className="botaoColorido" onClick={this.trocarImagem}>
                    >
                </button>
            </div>
        )
    }
}

export default Logos;