import React, {useState, useContext} from 'react'
import MyRecord from './record'
import {RecordContext} from '../../../contexts/RecordContext'
// import {RecordContext} from '../../../contexts/RecordContext'

export default function Record({users}) {

    const {records} = useContext(RecordContext)

    const [userRecords, setUserRecords] = useState([])
    const [user, setUser] = useState('')

    function getUserDetail(userId) { // filter with userId
        let user = users.filter(user => user._id === userId)
        let recordhere = records.filter(record => record.userId === userId)
        setUserRecords(recordhere)
        setUser(user[0])
    }
    // get teachers array
    function getTeachers() {
        let teachers = users.filter(user => user.role === 'Teacher')
        console.log('Teachers', teachers)
        return teachers
    }

    return (
        <div>
       
                    <div className='columns'>
                        {getTeachers().map(teacher => <div className='column button'
                            key={teacher._id} onClick={()=>getUserDetail(teacher._id)}>{teacher.name} </div>)
                        } 
                    </div>
                
                <MyRecord User={user} UserRecords={userRecords}/> 
                
                
        </div>
    )
}
