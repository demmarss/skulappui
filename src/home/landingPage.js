import React, { useState, useEffect, useContext } from 'react'
import AdminMenu from './adminMenus'
import StudentMenu from './studentMenu'
import TeacherMenu from './teacherMenu'
import SchoolSetUpForm from './schoolSetup'
import { SchoolContext } from '../contexts/SchoolContext'


export default function LandingPage({AuthedUSer} ) {

const [openCreateSchool, setOpenCreateSchool] = useState(true)
const [pageTitle, setPageTitle]= useState('Open Learning Management Sys+')
const [moto, setMoto]= useState('We offer all you need to manage your school & engage your students')

const { schools } = useContext(SchoolContext)

useEffect(() => {
    if (AuthedUSer){
        const school = getMySchool()
        setPageTitle(school.schoolName)
        setMoto(school.moto)
    }
    
});

function getMySchool(){
    const mySchool = schools.find(school=> school._id === AuthedUSer.affiliationId)
    return mySchool
}
    
    return (
        <section className="hero is-medium">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title is-1">
                        {pageTitle}
                    </h1>
                    <hr/>
                    <p className="subtitle">
                        {moto}
                    </p>
                    <hr/>
{!AuthedUSer?
                        openCreateSchool?                            
                            <h1 className='title is-1'>
                        <p className='button is-large is-rounded is-danger' onClick={()=> setOpenCreateSchool(false)}>
                            Set up school
                            </p>
                            <br/>
                            <br/>
                            <p className='subtitle'>Log in if you already set up you school </p>
                        </h1>:
                        <SchoolSetUpForm/>:null}
                    
                    {AuthedUSer ? 
                    AuthedUSer.role === 'Admin' ? <AdminMenu/>:
                    AuthedUSer.role === 'Student' ? <StudentMenu/>:
                    AuthedUSer.role === 'Teacher' ? <TeacherMenu/>
                    : null: null
                } </div>
            </div>
        </section>
    )
}
