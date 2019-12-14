import React, {useState} from 'react'
import Record from './records'
import Profile from './profiles'
import SetUp from './setUps'
// import Analysis from './analysis'
import NavBarDashBoard from './navBarDashBoard'
import AdminLandingPage from './adminLandingPage'
import SideAdminBar from './sideAdminBar'
import Finance from './Finance'

export default function Admin() {

    const [display, setDisplay] = useState('/')

    return (
        <div>

            <NavBarDashBoard/>
            <div className='columns'>
                <div className='column is-2'>
                    <SideAdminBar SetDisplay={setDisplay}/>
                </div>
                <div className='column is-10'>

                    {display === '/'? <AdminLandingPage/>:null}
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
            </div>

        </div>
    )
}
