import React, { useState } from 'react'
import SideNav from './sideNav'
import ClassPU from './classPU'
import ParentPU from './parentPU'
import AdminPU from './adminPU'
import NavBar from './navBar'
import NavBarDashBoard from '../admin/navBarDashBoard'

export default function PickUp () {
    const [status, setStatus ] = useState('')
    const [kidsPickUpList, setKidsPickUpList] = useState([])

    // Get family
    // I will have to link to backEnd
    // Just update the family information with timeOut
    // Return new family that come to pickUp
    // Update UserContext with new family
    // then UseEffect to listen to change in users 
    // get all kids
    // UpdateKidsPickUpList

    console.log(status)
    return(
        <div className='container'>

            <NavBarDashBoard SetStatus={setStatus} SourcePage = 'PickUp'/>
            {status === ''? <SideNav SetStatus = {setStatus}/>: null}
            {status === 'Parent'? <ParentPU SetStatus = {setStatus} SetKidsPickUpList={setKidsPickUpList}/>: null}
            {status === 'Class 1'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 2'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 3'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 4'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Admin'? <AdminPU SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            

        </div>
    )
}