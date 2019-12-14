import React, {createContext, useState, useEffect} from 'react'
import {getUsers, createUser} from '../api'

export const UserContext = createContext();

export default function UserContextProvider (props) {
const [ users, setUsers ] = useState([])

useEffect(() => {
    getUsers().then((result)=>
        setUsers(result)
    );    
}, []);

function creatingUser (newUser) {
    createUser(newUser).then((result)=>
        setUsers([...users, result])
    )
    
}

function searchUserById (userId){
    let result = users.find(x => x._id === userId)
    return(result)
}

function searchUserByCode (code){
    let result = users.find(x => x.code === code)
    return(result)
}

function searchByRole(role){
    let results = users.filter(x=> x.role === role)
    return (results)
}

function searchByGrade(grade){
    let results = users.filter(x=> x.grade === grade)
    return (results)
}

return(
            <UserContext.Provider value ={{users, creatingUser, searchUserById, searchUserByCode, searchByRole, searchByGrade }}>
                {props.children}
            </UserContext.Provider>
    )

}
