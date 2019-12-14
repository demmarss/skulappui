import React from 'react'
import NumberPad from './numberPad'


export default  function Timing () {
    
    return(
        <div>
             
            <div className="hero is-primary is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-1">
                        School Timing/Attendance
                    </h1>
                    <h2 className="subtitle">
                        Kindly enter your personal code to time in or out
                    </h2>
                    <NumberPad />
                </div>
            </div>
            
        </div>        
                     
        </div>
    )
}