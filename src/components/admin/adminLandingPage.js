import React, { useState } from 'react'
import PaymentForm from './Finance/payment'



export default function AdminLandingPage({users}) {

    const [status, setStatus ] = useState('')

    const [userHereRole, setUserHereRole] = useState('')
    const [userHere, setUserHere] = useState('')
    
    function handleSearch(mobile){
        const family = users.filter(user => user.mobile === mobile)
        const userhere = family.length >= 1? family.find(user => user.role === "Parent" ): undefined

        if (userhere !== undefined){
            setStatus('success')
            setUserHere(userhere)
            setUserHereRole(userhere.role)
        } else{
            setStatus('failure')
            setUserHereRole('')
        }
    }

    function studentNeed(){
        
        return(
            <PaymentForm user={userHere} Users = {users}/>
        )
    }

    function parentNeed(){
        
        return(
            <PaymentForm user={userHere} Users = {users}/>
        )
    }

    return (
        <div>
            <h1 className='title'>Welcome to administration page</h1>
        </div>
    )
}
