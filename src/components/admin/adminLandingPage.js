import React, { useState, useContext } from 'react'
import SearchBar from './searchBar/searchBar'
import { UserContext } from '../../contexts/UserContext'


export default function AdminLandingPage() {

    const [status, setStatus ] = useState('')

    const [userHereRole, setUserHereRole] = useState('')
    const {users} = useContext(UserContext)
    

    function handleSearch(code){
        const userhere = users.find(user => user.code === code)
        if (userhere !== undefined){
            setStatus('success')
            setUserHereRole(userhere.role)
        } else{
            setStatus('failure')
            setUserHereRole('')
        }
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

            {status ==='success'? userHereRole ==='Student'? <p> Student needs</p>:null:null}
            <div>
                Hidding payment form
                <br/>
                Hidding Id card generation form
                <br/>
                Attendance history
                <br/>
                Payment history
                <br/>
                Kids information
                <br/>
                Parent information
            </div>
            
            
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
