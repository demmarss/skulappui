import React, {useContext, useState} from 'react'
import PaymentForm from './payment'
import SearchBar from '../searchBar/searchBar'
import { UserContext } from '../../../contexts/UserContext'

export default function Finance() {
    const [status, setStatus] = useState('')
    const [userHere, setUserHere] = useState('')

    const {users} = useContext(UserContext)

    function handleSearch(code) {
        const userhere2 = users.find(user => user.code === code)
        if (userhere2 !== undefined) {
            setStatus('success')
            setUserHere(userhere2)

        } else {
            setStatus('failure')
            setUserHere({})

        }
    }

    return (
        <div>
            Finance {/* <Income/>
                <Expenses/>
                <CurrentBalance/> */}
            <SearchBar Search={handleSearch}
                Status={status}
                SetStatus={setStatus}/> 
                
                {status ==='success'? userHere.role ==='Student'? <PaymentForm user={userHere} Users = {users}/>:null:null}
                {status ==='success'? userHere.role === 'Parent'? <PaymentForm user={userHere} Users = {users}/>:null:null}

          </div>
    )
}
