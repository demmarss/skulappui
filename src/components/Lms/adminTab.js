import React from 'react'

export default function AdminTab({Status}){

    return(
        <div className=''>
            <div className="tabs is-fullwidth">
                <ul>
                    <li>
                    <p className={"button is-fullwidth"} onClick={()=> Status("home")}>
                        <span>Administration</span>
                    </p>
                    </li>
                    <li>
                    <p className="button is-fullwidth" onClick={()=> Status("registration")}>
                        <span>Registration</span>
                    </p>
                    </li>
                    <li>
                    <p className="button is-fullwidth" onClick={()=> Status("academics")}>
                        <span>Acadmics</span>
                    </p>
                    </li>
                    <li>
                    <p className="button is-fullwidth" onClick={()=> Status("finance")}>
                        <span>Finance</span>
                    </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}