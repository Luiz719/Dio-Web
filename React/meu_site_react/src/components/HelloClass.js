import React from 'react';

class HelloClass extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <p>Olá, classe! tudo beleza?</p>
            </div>
        )
    }
}
export default HelloClass;