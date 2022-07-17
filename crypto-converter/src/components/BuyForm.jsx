import React, {useState, useEffect, useCallback} from 'react'
import InputBase from './InputBase'
import styled from 'styled-components'

const InputButton = styled.input`
    width: 75%;
    margin-top: 20px;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    border-radius: 5px;
    border: transparent;
    margin: 10px;
    color:dimgray;
    background-color: cadetblue;
`
const BuyForm = ({data, onPurchase}) => {
    const {name, price} = data // name = props.data.name | price = props.data.price
    const initForm = {amount: 0, converted: 0}
    const [exchange, setExchange] = useState(initForm)
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        setExchange({
            ...exchange,
            converted: Number(exchange.amount / price).toFixed(8)
        })
    },[name])
    useEffect(() =>{
        onPurchase(transactions)
    },[transactions])
    const generateId = (prefix) => Math.random().toString().replace("0.", prefix)
    const handleChange = ({target: {value, name}}) => {
        //event.target.value
        const val = Number(value.trim())
        const converted = (val/price).toFixed(8)
        setExchange(
            {
                [name]:value,
                price:price,
                converted:converted
            }
        )
    }
    const makePurchase = useCallback(
        (event) => {
            event.preventDefault()
            if(!exchange.amount){
                alert("Informe um valor válido!")
            }else if(exchange.amount != 0){
                const payload = {
                    ...exchange,
                    name:name,
                    id:generateId("txid_") //txid_8976463 txid_363456
                }
                setTransactions(
                    [...transactions, payload]
                )
            }
        },[exchange, transactions]
    )
    return (
        <form onSubmit={makePurchase}>
            <div className="buy-form-container">
                <h4>Comprar {name}</h4>
                {/* entrada de dados do valor em reais */}
                <InputBase name="amount" label="USD" onChange={handleChange}  className="brl-input"/>
                {/* resultado da conversão do valor em reais pela taxa de câmbio da criptomoeda */}
                <InputBase 
                    value={exchange.converted} disabled label={name}
                />
                <InputButton type="submit" value="Comprar" />
            </div>
        </form>
    )
}

export default BuyForm