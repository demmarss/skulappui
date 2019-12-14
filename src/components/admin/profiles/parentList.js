import React, {useState} from 'react'
import MyProfile from './profile'

export default function ParentList({ParentList}) {

    const [parentHere, setParentHere] = useState('')


    return (
        <div>
            <div className='columns'>
                <div className='column is-4'>
                    {
                    ParentList('Parent').map(x => <p className='button is-round is-fullwidth'
                        onClick={
                            () => setParentHere(x)
                    } key={x.name}>
                        {x.name
                    } </p>)
                } </div>
                {
                parentHere !== ''? <div className='column is-8'>
                    Individual profile
                    <MyProfile user={parentHere}/>
                </div> : null
            } </div>
        </div>
    )
}
