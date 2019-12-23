import React, {useContext, useState} from 'react'
import {UserContext} from '../../../contexts/UserContext'
import SearchBar from '../searchBar/searchBar'
import ClassList from './classList'
import ParentList from './parentList'
import StaffList from './staffList'
import MyProfile from './profile'

export default function Profile() {
    const [option, setOption] = useState('')
    const [status, setStatus] = useState('')
    const [userHere, setUserHere] = useState('')

    const {users} = useContext(UserContext)

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
                <SearchBar Search={handleSearch}
                    Status={status}
                    SetStatus={setStatus}/> {
                status === 'success' ? <MyProfile user={userHere}/> : null
            } </div>

            {
            option === 'Class' ? <ClassList GetAllClasses={getAllClasses}
                GetAllStudents={getAllStudents}
                GetStudentParent={getStudentParent}/> : null
        }
            {
            option === 'Parents' ? <ParentList ParentList={getUserBaseOnRole}/> : null
        }
            {
            option === 'Staff' ? <StaffList StaffList={getUserBaseOnRole}/> : null
        } </div>
    )
}
