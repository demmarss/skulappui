import React, {useState} from 'react'
import SearchBar from '../searchBar/searchBar'

export default function MySetUp({SetSuccess, users, creatUser, LearningCycle, AuthedUser}) {

    const [code, setCode] = useState('')
    const [name, setName] = useState('')
    const [role, setRole] = useState('Select role')
    const [grade, setGrade] = useState('Select grade')
    const [parentId, setParentId] = useState('000000000000')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [parentSearchstatus, setParentSearchStatus] = useState('')
    const [parent, setParent ] = useState('')
        
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
        if(grade === 'Select grade' && role === 'Student'){
            alert('please select grade')
        }
        if(role==='Select role'){
            alert('please select role')
        }
        const extraCode = users.length
        let realCode = extraCode+code

        if (role === 'Parent'){
            realCode = '001'+realCode
        }else if (role === 'Student'){
            realCode = ('101'+realCode)
        }else {
            realCode = '000'+code+extraCode
        }

       let user = {}

        if (role ==='Student'){
            user = {
                code: realCode,
                name,
                role,
                grade,
                mobile: parent.mobile,
                parentId,
                address: parent.address,
                username: realCode,
                password: realCode,
                affiliationId: AuthedUser.affiliationId
            }
        }else{
            user = {
                code: realCode,
                name,
                role,
                grade,
                mobile,
                parentId,
                address,
                username: realCode,
                password: realCode,
                affiliationId: AuthedUser.affiliationId
            }
        }

        creatUser(user)
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
        setAddress('')
        setParentSearchStatus('')
    }
    const roleOptions = ['Student', 'Teacher', 'Parent', 'Admin']
    const gradeOptions = LearningCycle
    return (
        
        <div>
                <p className='title'>Set Up</p>
                <div className='columns'>
                    <div className='column is-2'>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <p className="navbar-link button title is-5">
                                {role}
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
                    <div className='column is-10'>
                    {
                role === 'Student' ? <React.Fragment> {
                    StudentRequirments()
                }
                            { parentSearchstatus === "success" ?
                            GeneralRequirment():null
                        } 
                
                </React.Fragment> : null
            }
                    </div>
                    
                </div>

                

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
            }

        </div>
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
                                                    {grade}
                                                </p>
                                                <div className="navbar-dropdown">
                                                    {
                                                    gradeOptions.map(gradeOption => <p className="navbar-item button is-hoverable"
                                                        onClick={
                                                            () => handleChangeGrade(gradeOption.lgtitle)
                                                        }
                                                        key
                                                        ={gradeOption.code}>
                                                        {gradeOption.lgtitle} </p>)
                                                } </div>
                                            </div>
                                        </div>
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
