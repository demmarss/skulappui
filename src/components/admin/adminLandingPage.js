import React, { useState, useContext } from 'react'
import SearchBar from './searchBar/searchBar'
import { UserContext } from '../../contexts/UserContext'
import PaymentForm from './Finance/payment'
import DailyFeeCollection from './Finance/dailyFeeCollection'


export default function AdminLandingPage() {

    const [status, setStatus ] = useState('')

    const [userHereRole, setUserHereRole] = useState('')
    const [userHere, setUserHere] = useState('')
    const {users} = useContext(UserContext)
    

    function handleSearch(code){
        const userhere = users.find(user => user.code === code)
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
            <div className="columns is-mobile is-centered">
                <div className="column is-half">
                        <p className="title is-4">
                            Search for records 
                        </p>
                    
                        <SearchBar Search={handleSearch} Status={status} SetStatus={setStatus}/>
                    
                </div>
            </div>

            {status ==='success'? userHereRole ==='Student'? <div>{studentNeed()}</div>:null:null}
            {status ==='success'? userHereRole ==='Parent'? <div>{parentNeed()}</div>:null:null}
                        
            { status === ''?
                
                <div>
            <div className='columns'>
                <div className='column is-6'>
                    <div className='box'>
                        <p className="title">
                            Student attendance
                        </p>
                    </div>
                </div>
                <div className='column is-6'>
                    <div className='box'>
                        <p className="title">
                            Teachers attendance
                        </p>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className='column is-6'>
                    <div className='box'>
                        <p className="title">
                            Payment update

                        </p>
                        <DailyFeeCollection/>
                    </div>
                </div>
                <div className='column is-6'>
                    <div className='box'>
                        <p className="title">
                            Enrollment Update
                        </p>
                    </div>
                </div>
            </div>
            </div>: null}
            

        </div>
    )
}
