import React, {useState} from 'react'

export default function SetStateFunctionPrev(){
    const [state,setState] = useState({
        name: 'Luiz',
        age:32
    })
    return (
        <div>
            <button
                //Atualizando uma propriedade do objeto e perdendo a outra
                //onClick={() => setState({name:'Luiz Gonzaga'})}

                //Realizando merge com estado anterior no componente de função
                //Em classes, o setter já entra nesse estado
                onClick={() => setState(
                    prevState => {
                        return {...prevState, name: 'Luiz Gonzaga'}
                    }
                )}>
                Atualizar nome
            </button>
            
            {JSON.stringify(state)}
        </div>
    )
}