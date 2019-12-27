import React, { useContext, useState, Fragment } from 'react'
import { SchoolContext } from '../contexts/SchoolContext'
import { Redirect } from 'react-router-dom'

export default function SchoolSetUpForm () {
    const[schoolName, setSchoolName]=useState('')
    const[abreviation, setAbreviation]=useState('')
    const[moto, setMoto]=useState('')
    const[file, setFile]=useState(null)
    const[qUploaded, setqUploaded]=useState('')
    const[schoolFilled, setSchoolFilled] = useState(false)

    const[name, setName]=useState('')
    const[username, setUsername]=useState('')
    const[password, setPassword]=useState('')
    const[address, setAddress]=useState('')
    const[code, setCode]=useState('')
    const[mobile, setMobile]=useState('')

    const[toHome, setToHome] = useState(false)

    const {creatingSchool } = useContext(SchoolContext)
    let formData = new FormData();
    function handleSubmit(e){

        formData.append('schoolLogo', file);
        formData.append('schoolName', schoolName);
        formData.append('abreviation', abreviation);
        formData.append('moto', moto);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('role', 'Admin');
        formData.append('code', code);
        formData.append('address', address);
        formData.append('parentId', 'Admin');
        formData.append('grade', 'Admin');
        formData.append('name', name);
        formData.append('mobile', mobile);
        formData.append('affiliationId', 'defaultValue');

        creatingSchool(formData)

        setToHome(true);

        e.preventDefault()
    }

    function handleChangeFile (e) {
        setqUploaded("file is-warning")
        setFile(e.target.files[0])
      };

    return (
        <div className='container'>

          {toHome === true?  <Redirect to="/logIn" />: null}
          
            {!schoolFilled?
            <Fragment>
<h1 className='title is-1'>School Information</h1>
            <input className='input box' type='text' value={schoolName} placeholder='Enter school name ' onChange={(e)=> setSchoolName(e.target.value)}/>
            <input className='input box' type='text' value={abreviation} placeholder='Enter school name abreviation ' onChange={(e)=> setAbreviation(e.target.value)}/>
            <input className='input box' type='text' value={moto} placeholder="Enter description" onChange={(e)=> setMoto(e.target.value)}/>

            <div className={qUploaded} onChange={(e)=> handleChangeFile(e)}>
                                <label className="file-label">
                                    <input className="file-input" type="file" name="questionImage"/>
                                    <span className="file-cta">
                                    <span className="file-label">
                                        Upload School Logo
                                    </span>
                                    </span>
                                </label>
                            </div>
            <p className='button is-success' onClick={()=>setSchoolFilled(true)}>Create School</p>
            <hr/>
            </Fragment>:
            <Fragment>
                <div className='columns'>
                    <div className='column is-6'>
                    <h1 className='title is-1'>School Information</h1>
                    <hr/>
                    <div className='columns'>
                        <div className='column is-6'>
                            <p className='title is-4'>School Name: </p>
                        </div>
                        <div className='column is-6'>
                            <p className='title is-4'> {schoolName} </p>
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='column is-6'>
                            <p className='title is-4'>School abreviation: </p>
                        </div>
                        <div className='column is-6'>
                            <p className='title is-4'> {abreviation} </p>
                        </div>
                    </div>
                    <div className='columns'>
                        <div className='column is-6'>
                            <p className='title is-4'>School moto: </p>
                        </div>
                        <div className='column is-6'>
                            <p className='title is-4'> {moto} </p>
                        </div>
                    </div>
                    </div>

                    <div className='column is-6'>
                        
            <h1 className='title is-1'>Main Administrator</h1>
            <input className='input box' type='text' value={name} placeholder='Enter Admin name ' onChange={(e)=> setName(e.target.value)}/>
            <input className='input box' type='text' value={code} placeholder='Enter Admin code' onChange={(e)=> setCode(e.target.value)}/>
            <input className='input box' type='text' value={address} placeholder='Enter Admin address ' onChange={(e)=> setAddress(e.target.value)}/>
            <input className='input box' type='text' value={mobile} placeholder='Enter mobile number ' onChange={(e)=> setMobile(e.target.value)}/>
            <input className='input box' type='text' value={username} placeholder='Enter username ' onChange={(e)=> setUsername(e.target.value)}/>
            <input className='input box' type='password' value={password} placeholder='Enter password ' onChange={(e)=> setPassword(e.target.value)}/>

            <p className='button is-success' onClick={handleSubmit}>Create School</p>
                    </div>

                </div>

            </Fragment>

            
        
            }
            


       </div>
    )
}