import React, { useState } from 'react'

export default function PickUpTab ({SetStatus, Status}){

    const [hideClasses, setHideClasses] = useState(false)

    function handleSetStatus (option){
        setHideClasses(false)
        SetStatus(option)
    }
    function handleSetClasses (){
        setHideClasses(!hideClasses)
        SetStatus('')
    }
    
    return (
<div>
<div className="tabs is-centered">
  <ul>
    <li className="button is-large" onClick={()=>handleSetStatus('Parent')}>Parent</li>
    <li className="button is-large" onClick={()=>handleSetClasses()}>Classes</li>
    <li className="button is-large" onClick={()=>handleSetStatus('Admin')}>Admin</li>
  </ul>
 
</div>

{hideClasses?
  <div className="tabs is-centered">
  <ul>
  <li className="button is-medium" onClick={()=>handleSetStatus('Class 1')}>Class 1</li>
    <li className="button is-medium" onClick={()=>handleSetStatus('Class 2')}>Class 2</li>
    <li className="button is-medium" onClick={()=>handleSetStatus('Class 3')}>Class 3</li>
    <li className="button is-medium" onClick={()=>handleSetStatus('Class 4')}>Class 4</li>
    </ul>
  </div>:null}
</div>
        

 
    )
}