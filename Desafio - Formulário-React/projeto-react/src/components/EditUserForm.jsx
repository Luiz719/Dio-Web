import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ConfirmButton = styled.button`
    background-color: lightgreen
`
const CancelButton = styled.button`
    background-color: lightcoral
`

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)
    useEffect(
        () =>{
            setUser(props.currentUser)
        }, [props]
    )
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setUser({...user, [name]:value})
    }
    return(
        <form onSubmit={
            (event) =>{
                event.preventDefault()
                props.updateUser(user.id, user)
            }
        }>
             <input type="text" name="name" value= {user.name} onChange= {handleInputChange} placeholder="Nome"/>
            <input type="text" name="username" value= {user.username} onChange= {handleInputChange} placeholder="Nickname"/>
            <input type="email" name="email" value= {user.email} onChange= {handleInputChange} placeholder="Email"/>
            <input type="number" name="age" value= {user.age} onChange= {handleInputChange} placeholder="Idade"/>
            <ConfirmButton>Atualizar</ConfirmButton>
            <CancelButton onClick={
                ()=> props.setEditing(false)
            }>Cancelar</CancelButton>
        </form>
    )
}
export default EditUserForm;

