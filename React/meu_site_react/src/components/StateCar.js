import React from 'react';

export default class StateCar extends React.Component {
    constructor(props) {
        super(props);
        this.modelo = "Ferrari"
        this.state = {
            ligado: false,
            velocidade: 0
        }
    }
    ligarDesligar(){
        this.setState({ligado: !this.state.ligado})
    }
    acelerar(){
        if(this.state.ligado){
            let vel = this.state.velocidade + 10
            this.setState({velocidade: vel})
        }
    }
    frear(){
        if(this.state.ligado && this.state.velocidade > 0){
            let vel = this.state.velocidade - 20
            if(vel < 0){
                vel = 0;
            }
            this.setState({velocidade: vel})
        }
    }
    parar(){
        this.setState({velocidade: 0})
    }
render(){
        return(
            <div>
                <p>Carro: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? "Sim" : "Não"}</p>
                <p>Velocidade: {this.state.velocidade}</p>
                <button onClick={() => this.ligarDesligar()}>Girar Chave</button>
                <button onClick={() => this.acelerar()}>Acelerar</button>
                <button onClick={() => this.frear()}>Frear</button>
                <button onClick={() => this.parar()}>Parar</button>
            </div>
        )
    }
}