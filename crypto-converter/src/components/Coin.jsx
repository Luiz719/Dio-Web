import React from "react"

const Coin = ({data,selectedTile, onClick}) => {
    //props
    const {name, icon, price, symbol} = data
    const handleClick = () => onClick(data)
    return(
        <div className={`card ${selectedTile && 'selected'}`}
        onClick={handleClick}>
            <div>{name} : {symbol}</div>
            <img className ="coin-icon" src={icon} alt={name} />
            <div>
                <strong>USD: {price.toFixed(8)}</strong>
            </div>
        </div>
    )
}

export default Coin