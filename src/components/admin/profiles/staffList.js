import React, { useState } from 'react'
import MyProfile from './profile'

export default function StaffList ({StaffList}){

    const [userHere, setUserHere] = useState('')


    return(
        <div>
            <div className='columns'>
                        <div className='column is-4'>
                        {
                        StaffList('Teacher').map(x => <p className='button is-round is-fullwidth'
                        onClick={
                            () => setUserHere(x)
                    } key={x.name}>
                        {x.name
                    } </p>)
                    } 
                        </div>{
            userHere !== ''? <div className='column is-8'>
                Individual profile
                <MyProfile user={userHere}/>
            </div> : null
        } </div>
        </div>
    )
}




