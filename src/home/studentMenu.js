import React from 'react'
import {Link} from 'react-router-dom'

export default function StudentMenu (){
return <React.Fragment>
<div className='columns'> 
    <div className='column is-3'>
        <Link className='tile title notification is-primary ' to='/myTask'>
            My Task
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-success ' to='/myProgress'>
            My Progress
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-primary ' to='/myQuestionAnalysis'>
            Q Analysis
        </Link>
    </div>
    <div className='column is-3'>
        <Link className='tile title notification is-primary ' to='/myClass'>
            My Class
        </Link>
    </div>
</div>
</React.Fragment> 
}