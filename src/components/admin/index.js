import React, {useState} from 'react'
import Record from './records'
import Profile from './profiles'
import SetUp from './setUps'
// import Analysis from './analysis'
import AdminLandingPage from './adminLandingPage'
import Finance from './Finance'
import AdminTab from './adminTab'

export default function Admin() {

    const [display, setDisplay] = useState('')

    return (
        <div className='container'>
            <AdminTab SetDisplay={setDisplay}/>
                    {display === ''? <AdminLandingPage/>:null}
                    {
                    display === 'setUp' ? <SetUp/>: null
                }
                    {
                    display === 'profile' ? <Profile/>: null
                }
                    {
                    display === 'record' ? <Record/>: null
                }
                    {
                    display === 'finance' ? <Finance/>: null
                } 
                 {/* {
                    display === 'academics' ? <Academics/>: null
                } */}
        </div>
    )
}
