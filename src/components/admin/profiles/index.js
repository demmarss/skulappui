import React, {useState} from 'react'
import SearchBar from '../searchBar/searchBar'
import ClassList from './classList'
import ParentList from './parentList'
import StaffList from './staffList'
import MyProfile from './profile'

export default function Profile({users, LearningCycle}) {

    console.log('Users at profile', users)
    
    const [option, setOption] = useState('')
    const [status, setStatus] = useState('')
    const [userHere, setUserHere] = useState('')

    function handleSearch(code) {
        const userhere2 = users.find(user => user.code === code)
        if (userhere2 !== undefined) {
            setStatus('success')
            setUserHere(userhere2)

        } else {
            setStatus('failure')
            setUserHere('')

        }
    }

    function getAllClasses() {

        const classList = ['Class 1', 'Class 2', 'Class 3', 'Class 4']
        return(classList)
    }

    function getAllStudents(grade) {
        const studentList = users.filter(student => student.grade === grade)
        return(studentList)

    }

    function getUserBaseOnRole(role) {
        const userBaseOnRole = users.filter(user => user.role === role)
        return(userBaseOnRole)
    }

    function getStudentParent(parentId) {
        const allParents = getUserBaseOnRole('Parent')
        const studentParent = allParents.find(x => x._id === parentId)
        return(studentParent)
    }

    return (
        <div>
            <p className="title">Profile</p>
            <div className="container">
                <div className="tabs is-centered">
                    <br/><br/>
                    <ul>
                        <li className="button is-large"
                            onClick={
                                () => setOption('Class')
                        }>Class</li>
                        <li className="button is-large"
                            onClick={
                                () => setOption('Parents')
                        }>Parents</li>
                        <li className="button is-large"
                            onClick={
                                () => setOption('Staff')
                        }>Staff</li>
                        <li className="button is-large"
                            onClick={
                                () => setOption('Others')
                        }>Others</li>
                    </ul>
                </div>
                <div className="columns is-mobile is-centered">
                <div className="column is-half">
                        <p className="title is-4">
                            Search for records 
                        </p>
                    
                        <SearchBar Search={handleSearch} Status={status} SetStatus={setStatus}/>
                        {
                status === 'success' ? <MyProfile user={userHere}/> : null
            } 
                </div>
            </div>
 </div>

            {
            option === 'Class' ? <ClassList GetAllClasses={getAllClasses}
                GetAllStudents={getAllStudents}
                GetStudentParent={getStudentParent} LearningCycle={LearningCycle}/> : null
        }
            {
            option === 'Parents' ? <ParentList ParentList={getUserBaseOnRole}/> : null
        }
            {
            option === 'Staff' ? <StaffList StaffList={getUserBaseOnRole}/> : null
        } </div>
    )
}
