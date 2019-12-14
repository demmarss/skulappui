import React, {useState} from 'react'
import MySetUp from './setup'
import SuccessMessage from './success'

export default function SetUp() {

    const [success, setSuccess] = useState(false)

    return (
        <div className='container'>
            <div className='column is-3'>
            <a className="box" href='/lcycle'>
            Click to create a class
            </a>
            </div>
            
            {
            success ? <SuccessMessage/>: <MySetUp SetSuccess = {setSuccess}/>}
        </div>
    )
}
