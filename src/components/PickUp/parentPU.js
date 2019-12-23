import React, { useState, useContext } from 'react'
import SearchBar from '../admin/searchBar/searchBar'
import { UserContext } from '../../contexts/UserContext'
import { emitingToSocket } from '../../webSocket/chat'

export default function ParentPU (){

    const [parent, setParent ] = useState(undefined)
    const [kids, setKids ] = useState([])
    const [status, setStatus ] = useState('')
        
    const {users} = useContext(UserContext)
 

    function handleSearch(code){
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
    <div className='columns'>
            <div className='column'>
            <SearchBar Search={handleSearch} Status={status} SetStatus={setStatus}/>
            </div>
        </div>
        {/* If search is successfull */}
        {status === 'success'? 
        <div className='columns'>
            <div className='column'>
           <p className='title'> Parent info </p>
            {parent !== undefined? <p>{parent.name}</p>:null}
            </div>
            <div className='column'>
            <p className='title'>Kids information</p>
                {kids.map(kid=>
                <p key={kid.code} className='title is-3'> Name: {kid.name}</p>
                )}
                <p className='button is-danger is-rounded' onClick={handleInitiatePickUp}> Confirm </p>
            </div>
        </div>:null}
        </div>
    )
}