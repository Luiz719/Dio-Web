import React, {useState, useEffect} from "react";
import Coin from "./Coin";
import BuyForm from './BuyForm';
import Transactions from './Transactions';

const CoinList = () => {
    const [coinList, setCoinList] = useState([])
    const [coinName, setCoinName] = useState('')
    const [list, setList] = useState([])
    const mainContainer = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const url = "https://api.coinstats.app/public/v1/coins?skip=0"
    useEffect(() =>{
        fetch(url)
        .then(
            (result) => result.json()
        ).then(
            (data) => setCoinList(data.coins)
        ).catch(
            (err) => console.log(`Error: ${err}`)
        )

    },[])
    const filteredCoins = coinList.filter(
        (coin) => {
            return coin.name.toLowerCase().includes(coinName.toLowerCase());
        }
    );
    const [selectedTile, setSelectedTile] = useState(filteredCoins)
    const handleSelect = (data) => {
        setSelectedTile(data)
    }
    const buildList = (list) => {
        setList(list)
    }
    return(
        <div>
            <div>
                <input 
                    type="text"
                    placeholder="Pesquisar CriptoMoeda"
                    onChange={
                        (event) => {
                            setCoinName(event.target.value)
                        }
                    }
                />
            </div>
            <div style={mainContainer}>
                {
                    filteredCoins.map(
                        (coin) => {
                            return(
                                <Coin 
                                    data={coin}
                                    onClick={handleSelect}
                                    selectedTile={coin.id === selectedTile.id}
                                />
                            )
                        }
                    )
                }
            </div>
                <BuyForm data={selectedTile} onPurchase={buildList}/>
            <div>
                <Transactions list={list} />
            </div>
        </div>
    )
}

export default CoinList