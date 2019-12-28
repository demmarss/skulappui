import React, {createContext, useState, useEffect} from 'react'
import {getSchools, createSchool} from '../components/service/api'

export const SchoolContext = createContext();

export default function SchoolContextProvider (props) {

    const [ schools, setSchool ] = useState([])

    useEffect(() => {
        getSchools().then((result)=>
        setSchool(result)
        );
    }, []);
    
    
    function creatingSchool (schoolHere) {
        createSchool(schoolHere).then((result)=>{
           if( result !== ''){
            const updatedSchools = schools.filter(x=> x._id !== result._id)
            setSchool([...updatedSchools, result])
           }else{
            alert('School Creationg not success')
           }            
        }
        )   
    }
    
return(
            <SchoolContext.Provider value ={{schools, creatingSchool}}>
                {props.children}
            </SchoolContext.Provider>
    )

}
