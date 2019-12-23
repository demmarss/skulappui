import React, { useState } from 'react'
import ClassPU from './classPU'
import ParentPU from './parentPU'
import AdminPU from './adminPU'
import PickUpTab from './pickUpTab'

export default function PickUp () {
    const [status, setStatus ] = useState('')
    const [kidsPickUpList, setKidsPickUpList] = useState([])

        
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
{status === 'Parent'? <ParentPU SetStatus = {setStatus} SetKidsPickUpList={setKidsPickUpList}/>: null}
            {status === 'Class 1'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 2'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 3'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Class 4'? <ClassPU Status={status} SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}
            {status === 'Admin'? <AdminPU SetStatus = {setStatus} KidsPickUpList={kidsPickUpList}/>: null}      
          
            

        </div>
    )
}