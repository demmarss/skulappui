import React, {useState, useContext} from 'react'
import {UserContext} from '../../../contexts/UserContext'
import SearchBar from '../searchBar/searchBar'

export default function MySetUp({SetSuccess}) {
    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [grade, setGrade] = useState('')
    const [parentId, setParentId] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [parentSearchstatus, setParentSearchStatus] = useState('')
    const [parent, setParent ] = useState('')

    const {creatingUser, users} = useContext(UserContext)
    
    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeCode(e) {
        setCode(e.target.value)
    }
    function handleSetMobile(e) { // if Student, search for parent, then use the parent info
        setMobile(e.target.value)
    }
    function handleSetParentId(code) {
        // search for parentCode
        const parents = users.filter(user => user.role === "Parent")
        const parent = parents.find(user => user.code === code )

        console.log("PArent", parent)

        if (parent !== undefined){
            setParent(parent)
            setParentId(parent._id)
            setParentSearchStatus('success')
        }else{
            setParentId('')
            setParentSearchStatus('failure')
        }
                
    }

    function handleSetAddress(e) { // if Student, search for parent, then use the parent info
        setAddress(e.target.value)
    }

    function handleChangeRole(role) {
        setRole(role)
    }
    function handleChangeGrade(grade) {
        setGrade(grade)
    }


    function handleSubmit() {
        let user = {
            code,
            name,
            role,
            grade,
            mobile,
            parentId,
            address
        }
        creatingUser(user)
        SetSuccess(true)
        ResetValue()
    }

    function ResetValue() {
        setCode('')
        setName('')
        setRole('')
        setGrade('')
        setParentId('')
        setMobile('')
        setMobile('')
        setAddress('')
        setAddress('')
        setParentSearchStatus('')

    }
    const roleOptions = ['Student', 'Teacher', 'Parent', 'Admin']
    const gradeOptions = ['Class 1', 'Class 2', 'Class 3', 'Class 4']

    return (
        <article className="message">
            <div className="message-header">
                <p>Set Up</p>

            </div>
            <div className="message-body">

                <div className='columns'>
                    <div className='column is-4'>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <p className="navbar-link button is-warning title is-5">
                                Who do you want to register?
                            </p>
                            <div className="navbar-dropdown">
                                {
                                roleOptions.map(roleOption => <p className="navbar-item button is-hoverable"
                                    onClick={
                                        () => handleChangeRole(roleOption)
                                    }
                                    key
                                    ={roleOption}>
                                    {roleOption} </p>)
                            } </div>
                        </div>

                    </div>
                    <div className='column is-3'>
                        {
                        role !== '' ? <p className='title is-4'>Role : {role}</p> : null
                    } </div>


                </div>

                {
                role === 'Student' ? <React.Fragment> {
                    StudentRequirments()
                }
                            { parentSearchstatus === "success" ?
                            GeneralRequirment():null
                        } 
                
                </React.Fragment> : null
            }

                {
                role === 'Teacher' ? <React.Fragment> {
                    GeneralRequirment()
                }
                    {
                    TeacherAndParentSpecificRequirement()
                } </React.Fragment> : null
            }

                {
                role === 'Parent' ? <React.Fragment> {
                    GeneralRequirment()
                }
                    {
                    TeacherAndParentSpecificRequirement()
                } </React.Fragment> : null
            }
                <hr/> {
                role !== '' ? code !== '' ? name !== '' ? <button className="button is-success"
                    onClick={handleSubmit}>Submit</button> : null : null : null
            } </div>

        </article>
    )


    function StudentRequirments() {
        return (
            <div>

                <div className="columns">
                    <div className="column">
                        <div className="columns is-mobile">
                            <div className="column">
                                <SearchBar Search={handleSetParentId}
                                    Status={parentSearchstatus}
                                    SetStatus={setParentSearchStatus}/>
                            </div>
                            <div className="column">
                                {
                                parentSearchstatus === "success" ? <React.Fragment>
                                    <div className='columns'>

                                        <div className='column is-6'>
                                            Parent  Code: 
                                        </div>
                                        <div className='column is-6'>

                                            <p className='title is-4'>
                                            {parent.code}</p>
                                        </div>

                                    </div>
                                    <div className='columns'>
                                        <div className='column is-6'>
                                            Address: 
                                        </div>
                                        <div className='column is-6'>

                                            <p className='title is-4'>
                                            {parent.address}</p>
                                        </div>

                                    </div>
                                    <div className='columns'>
                                        <div className='column is-6'>
                                            Mobile:
                                        </div>
                                        <div className='column is-6'>

                                            <p className='title is-4'>
                                                {parent.mobile}</p>
                                        </div>

                                    </div>
                                    <div className='columns'>
                                        <div className='column is-4'>

                                            <div className="navbar-item has-dropdown is-hoverable">
                                                <p className="navbar-link button is-warning title is-5">
                                                    Select grade
                                                </p>
                                                <div className="navbar-dropdown">
                                                    {
                                                    gradeOptions.map(gradeOption => <p className="navbar-item button is-hoverable"
                                                        onClick={
                                                            () => handleChangeGrade(gradeOption)
                                                        }
                                                        key
                                                        ={gradeOption}>
                                                        {gradeOption} </p>)
                                                } </div>
                                            </div>
                                        </div>
                                        <div className='column is-5'>
                                            {
                                            role !== '' ? <p className='title is-4'>Grade : {grade}</p> : null
                                        } </div>
                                    </div>
                                </React.Fragment> : null
                            } </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function TeacherAndParentSpecificRequirement() {
        return (
            <React.Fragment>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">
                            <h1 className='title is-4'>Address:</h1>
                        </label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input is-danger" type="text" placeholder="Enter your name"
                                    value={address}
                                    onChange={handleSetAddress}/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">
                            <h1 className='title is-4'>Mobile:</h1>
                        </label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input is-danger" type="text" placeholder="Enter your name"
                                    value={mobile}
                                    onChange={handleSetMobile}/>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    function GeneralRequirment() {
        return (
            <React.Fragment>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">
                            <h1 className='title is-4'>Name:</h1>
                        </label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input is-danger" type="text" placeholder="Enter your name"
                                    value={name}
                                    onChange={handleChangeName}/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">
                            <h1 className='title is-4'>Code:</h1>
                        </label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input className="input is-danger" type="number" placeholder="Type your code"
                                    value={code}
                                    onChange={handleChangeCode}/>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
