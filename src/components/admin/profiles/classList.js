import React, {useState} from 'react'
import MyProfile from './profile'

export default function ClassList({GetAllClasses, GetAllStudents}) {
    

    const [students, setStudents] = useState([])
    const [userHere, setUserHere]= useState('')

    function handleGetAllStudents(grade) {
        const students = GetAllStudents(grade)
        setStudents(students)
    }

    function getUser(userId){
        const user = students.find(element => element._id === userId)
        setUserHere(user)
    }

    return (
        <div>
            <div className='columns'>
                <div className='column is-2'>

                    {
                    GetAllClasses().map(x => <div className='columns' key={x}>
                        <div className='column is-12'>
                            <div className='button is-large is-fullwidth'
                                onClick={
                                    () => handleGetAllStudents(x)
                            }>
                                {x} </div>
                        </div>
                    </div>)
                } </div>
                <div className='column is-5'>
                    {
                    students.map(student => <p key={student._id} onClick={()=>getUser(student._id)}>{
                        student.name
                    }</p>)
                } </div>
                <div className='column is-5'>
                    {
                        userHere !== ''? 
                        <MyProfile user={userHere}/>:null
                    }
                    
                </div>
            </div>
        </div>
    )
}
