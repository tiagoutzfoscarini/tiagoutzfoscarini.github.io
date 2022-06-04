import React, {Component} from 'react';

class Relogio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            hidden: false
        }
    }

    render() {
        if (this.state.hidden === false) {
            return (
                <div className="relogio">
                    <button className="botaoColorido" onClick={() => this.setState({hidden: true})}>Esconder Relógio</button>
                    <h3>{this.state.date.toLocaleTimeString()}</h3>
                </div>
            )
        } else {
            return (
                <div className="relogio">
                    <button className="botaoColorido" onClick={() => this.setState({hidden: false})}>Mostrar Relógio</button>
                </div>
            )
        }
    }

    componentDidMount() {
        const oneSecond = 1000;
        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, oneSecond);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}

export default Relogio;