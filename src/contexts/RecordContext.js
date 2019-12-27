import React, {createContext, useState, useEffect} from 'react'
import {getRecords, createTimeRecord} from '../components/service/api'

export const RecordContext = createContext();

export default function RecordContextProvider (props) {

    const [ records, setRecords ] = useState([])

    useEffect(() => {
        getRecords().then((result)=>
        setRecords(result)
        );
    }, []);
    
    
    function creatingTimeRecord (userId) {
        createTimeRecord(userId).then((result)=>{
            const updatedRecords = records.filter(x=> x._id !== result._id)
            setRecords([...updatedRecords, result])}
        )   
    }

return(
            <RecordContext.Provider value ={{records, creatingTimeRecord}}>
                {props.children}
            </RecordContext.Provider>
    )

}
