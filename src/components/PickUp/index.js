import React, { useState } from 'react'
import ClassPU from './classPU'
import ParentPU from './parentPU'
import AdminPU from './adminPU'
import PickUpTab from './pickUpTab'
import { connect } from 'react-redux'
import {useDispatch, useSelector} from 'react-redux'

export default function PickUp () {

    const [status, setStatus ] = useState('')
    const [kidsPickUpList, setKidsPickUpList] = useState([])

    const dispatch = useDispatch()
    
    const users = useSelector(({user})=>{
      console.log('Usere here.............', user)
      return user
    })

    console.log('Usere ssssss here.............', users)
    return(

        <div className='container'>

<section className="hero is-light is-bold">
  <div className="hero-body">
        <h1 className="title">
          PickUp Apps
        </h1>
        <h2 className="subtitle">
          Managing children pick up
        </h2>
      <PickUpTab SetStatus={setStatus} Status={status}/>

  </div>
</section>
{status === 'Parent'? <ParentPU SetStatus = {setStatus} SetKidsPickUpList={setKidsPickUpList} users={users}/>: null}
            {status === 'Class 1'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 2'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 3'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 4'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Admin'? <AdminPU SetStatus = {setStatus} KidsPickUpList={kidsPickUpList} users={users}/>: null}      
          
            

        </div>
    )
}
