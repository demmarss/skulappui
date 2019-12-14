import React, {createContext, useState} from 'react'
import {createLcycle, joinLcycle} from '../api'

export const LcycleContext = createContext();

export default function LcycleContextProvider (props) {

    const [ lcycles, setLcycle ] = useState([])

    // useEffect(() => {
    //     getLcycles().then((result)=>
    //     setLcycle(result)
    //     );
    // }, []);
    
    
    function creatingLcycle (userId) {
        createLcycle(userId).then((result)=>{
            const updatedLcycle = lcycles.filter(x=> x._id !== result._id)
            setLcycle([...updatedLcycle, result])}
        )   
    }

    function joiningLcycle (userId) {
        joinLcycle(userId).then((result)=>{
            const updatedLcycle = lcycles.filter(x=> x._id !== result._id)
            setLcycle([...updatedLcycle, result])}
        )   
    }

return(
            <LcycleContext.Provider value ={{lcycles, creatingLcycle, joiningLcycle}}>
                {props.children}
            </LcycleContext.Provider>
    )

}
