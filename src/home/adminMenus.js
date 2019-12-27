import React from 'react'
import {Link} from 'react-router-dom'

export default function AdminMenu (){
return <React.Fragment>
<div className='columns'> 
    <div className='column is-3'>
        <Link className='tile title notification is-primary ' to='/timer'>
            Timer
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-success ' to='/admin'>
            Admin
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-link ' to='/pickup'>
            PickUp
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-primary ' to='/myTask'>
            My Task
        </Link>
    </div>
</div>
<div className='columns'>
    <div className='column is-3'>
        <Link className='tile title notification is-success ' to='/lcycle'>
            LCycle
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-danger ' to='/question'>
            Q maker
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-info ' to='/myClass'>
            My Class
        </Link>
    </div>
</div>
</React.Fragment> 
}