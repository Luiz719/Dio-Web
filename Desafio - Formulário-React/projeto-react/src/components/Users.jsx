import React, {useState} from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import UsersTable from './UsersTable';

export default function Users(){
    const userDate = [
        {id: 1, name: "Luiz", username: "Luiz120", email: "luiz@dio.me", age: 15},
        {id: 2, name: "John", username: "John750", email: "johnz@dio.me", age: 25}
    ]
    const initForm = {id: null, name: "", username: "", email: "", age: null}
    const [users, setUsers] = useState(users)
    const [currentUser, setCurrentUser] = useState(initForm)
    const [editing, setEditing] = useState(false)
    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
    const deleteUser = (id) => {
        setEditing(false)
        setUsers(users.filter(
            (user) => {
                user.id !== id
            }
        ))
    }
    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }
    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({id: user.id, name:user.name, username:user.username, email:user.email, age:user.age})
    }
}