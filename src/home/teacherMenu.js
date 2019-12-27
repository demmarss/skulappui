import React from 'react'
import {Link} from 'react-router-dom'

export default function TeacherMenu (){
return <React.Fragment>

<div className='columns'>
    <div className='column is-4'>
        <Link className='tile title notification is-warning ' to='/question'>
            Q maker
        </Link>
    </div>
    <div className='column is-4'>
        <Link className='tile title notification is-primary ' to='/myTask'>
            My Task
        </Link>
    </div>
    <div className='column is-4'>
        <Link className='tile title notification is-primary ' to='/myClass'>
            My Class
        </Link>
    </div>
</div>
</React.Fragment> 
}