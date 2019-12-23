import React, {useState} from 'react'
import MySetUp from './setup'
import SuccessMessage from './success'

export default function SetUp() {

    const [success, setSuccess] = useState(false)

    return (
        <div className='container'>            
            {
            success ? <SuccessMessage/>: <MySetUp SetSuccess = {setSuccess}/>}
        </div>
    )
}
