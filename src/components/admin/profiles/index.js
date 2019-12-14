import React, {useContext, useState} from 'react'
import {UserContext} from '../../../contexts/UserContext'
import SearchBar from '../searchBar/searchBar'
import ClassList from './classList'
import ParentList from './parentList'
import StaffList from './staffList'
import OtherList from './otherList'
import MyProfile from './profile'

export default function Profile() {
    const [option, setOption ] = useState('')
    const [status, setStatus ] = useState('')
    const [userHere, setUserHere ] = useState('')

    const {users} = useContext(UserContext)
 
function handleSearch(code){
    const userhere2 = users.find(user => user.code === code)
    if (userhere2 !== undefined){
        setStatus('success')
        setUserHere(userhere2)

    } else{
        setStatus('failure')
        setUserHere('')
        
    }
}


    // function getUserDetail(userId) {

    //     // get all records
    //     // filter with userI
    //     // return array and set it to userRecord
    // }

    function getAllClasses(){
    
        const classList = ['Class 1', 'Class 2', 'Class 3', 'Class 4']
        return(classList)
    }

    function getAllStudents(grade){
        const studentList = users.filter(student=> student.grade === grade)
        return (studentList)

 }

 function getUserBaseOnRole(role){
    const userBaseOnRole = users.filter(user=> user.role === role)
    return (userBaseOnRole)
 }

    const profileOptions = ['Class', 'Parents', 'Staff', 'Others']


    return (
        <div>
            <article className="message is-success">
                <div className="message-header">
                    <p className="title">Profile</p>
                </div>
                <div className="message-body">
                    <section className="section">
                        <div className="container">
                            <SearchBar Search={handleSearch} Status={status} SetStatus={setStatus}/>

                            {
                        status ==='success'? 
                        <MyProfile user={userHere}/>:null
                    }

                            <div className="columns">
                                {
                                profileOptions.map(option => <div className='column' key={option}>
                                    <div className='box' onClick={()=>setOption(option)}>
                                        <p className='title is-4'>
                                            {option}</p>
                                    </div>
                                </div>)
                            } </div>
                        </div>
                    </section>

                    {option === 'Class'? <ClassList GetAllClasses= {getAllClasses} GetAllStudents={getAllStudents}/>:null}
                    {option === 'Parents'? <ParentList ParentList= {getUserBaseOnRole} />:null}
                    {option === 'Staff'? <StaffList StaffList= {getUserBaseOnRole}/>:null}
                    {option === 'Others'? <OtherList OtherList= {getUserBaseOnRole}/>:null}
                    
                </div>
            </article>

        </div>
    )
}
