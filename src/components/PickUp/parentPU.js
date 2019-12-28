import React, { useState } from 'react'
import SearchBar from '../admin/searchBar/searchBar'
import { emitingToSocket } from '../../webSocket/chat'

export default function ParentPU ({users}){

    const [parent, setParent ] = useState(undefined)
    const [kids, setKids ] = useState([])
    const [status, setStatus ] = useState('')

    function handleSearch(code){
        console.log('User in Parent PU', users)
        const userhere2 = users.find(user => user.code === code)
        if (userhere2 !== undefined){
            setStatus('success')
            setParent(userhere2)
            let kids = getKids(userhere2._id)
            setKids(kids)    
        } else{
            setStatus('failure')
            setParent(undefined)
        }
    }

    function handleInitiatePickUp (){
        emitingToSocket(kids)
        setStatus('')
    }

    function getKids(parentId){
        let kids = users.filter(user=> user.parentId === parentId)
        return kids
    }
    return(
        <div>  
    <div className="columns is-mobile is-centered">
                <div className="column is-half">
                        <p className="title is-4">
                            Search for records 
                        </p>
                        <SearchBar Search={handleSearch} Status={status} SetStatus={setStatus}/>
                    
                </div>
            </div>
        {/* If search is successfull */}
        {status === 'success'? 
        <div className='columns'>
            <div className='column'>
           <p className='title'> Parent info </p>
            {parent !== undefined? <p className='subtitle'>{parent.name}</p>:null}
            </div>
            <div className='column'>
            <p className='title'>Kids information</p>
            <ul>
            {kids.map(kid=>
                <li key={kid.code}> {kid.name}</li>
                )}
            </ul>
                
                <p className='button is-danger is-rounded' onClick={handleInitiatePickUp}> Confirm </p>
            </div>
        </div>:null}
        </div>
    )
}