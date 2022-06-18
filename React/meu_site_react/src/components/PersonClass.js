import React from 'react'

class PersonClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 32,
            profession:"Developer",
            area:"Frontend",
            name: this.props.name,
            status: true
        }
        this.status = this.props.status
        this.uS = this.updateStatus.bind(this)
    }
    updateStatus(){
        this.setState(
            (state) => ({
                status: !state.status
            })
        )
        console.log(this.state)
    }
    componentDidMount(){
        console.log("O componente foi montado!")
    }
    componentDidUpdate(){
        alert("O componente foi atualizado!")
    }
    render(){
        return(
            <div>
                <p> Nome: {this.props.name}</p>
                <p> Iddade: {this.state.age}</p>
                <p> Profissao: {this.state.profession}</p>
                <p> Area: {this.state.area}</p>
                <p> Status: {this.state.status?"active" : "offline"}</p>
                <button onClick={ () => this.updateStatus()}>Alterar status</button>
                <button onClick={this.uS}>Alterar status - Bind</button>
            </div>
        )
    }
}
export default PersonClass