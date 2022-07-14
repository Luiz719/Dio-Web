import React, {useState} from 'react'

export default function PrevState(){
    const [balance, setBalance] = useState(100)
    //Atualiza o estado com o valor correto
    const deposit = () =>{
        setTimeout(() =>{
            //setBalance(balance + 100) //atualiza com o estado desatualizado
            //prevState armazena o último estado atualizado, independente da ordem de chamada
            setBalance((prevState) => prevState + 100)
        },3000)
    }
    return(
        <div style={{borderBottom: '1px solid', marginBottom: '15px'}}>
            <button onClick={deposit}>Depositar 100</button>
            <button
                onClick={() => setBalance(balance - 200)}>
                Sacar 200
            </button>
            <h3>Meu saldo é: {balance}</h3>
        </div>
    )
}