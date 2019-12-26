import React, {useState} from 'react'
import MySetUp from './setup'
import SuccessMessage from './success'

export default function SetUp({users, createUser}) {

    const [success, setSuccess] = useState(false)

    return (
        <div className='container'>            
            {
            success ? <SuccessMessage/>: <MySetUp SetSuccess = {setSuccess} users={users} creatUser ={createUser}/>}
        </div>
    )
}
