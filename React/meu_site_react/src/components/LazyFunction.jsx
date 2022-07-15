import React, {useState} from 'react';

function counter(){
    return Math.random();
}

export default function LazyFunction(){
    //chama a função apenas uma vez
    const [state, setState] = useState(counter())
    const [num, setNum] = useState(0)
    return(
        <div>
            <h4>Inicialização lenta</h4>
            <p> Valor do state: {state}</p>
            <p>Valor de num: {num}</p>
            <button
                onClick={
                    () => setNum(num + 1)
                }>
                Clique aqui!
            </button>
        </div>
    )
}