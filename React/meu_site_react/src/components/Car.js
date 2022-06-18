import React from 'react';

class Car extends React.Component {
    constructor(){
        super()
        this.state = {cor: "azul", model: "ferrari"}
    }
    render(){
        let consumo = 10;
        return (
            <div>
                <p>A cor do carro é {this.state.cor}</p>
                <p>O modelo do carro é {this.state.model}</p>
                <p>O consumo do carro é {consumo}</p>
            </div>
        )
    }
}
export default Car;