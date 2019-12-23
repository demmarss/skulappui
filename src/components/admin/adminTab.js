import React from 'react'

export default function AdminTab ({SetDisplay}){
    return (
        <div className="tabs is-centered is-fullwidth">
            <br/><br/><br/><br/><br/>
  <ul>
    <li className="button is-large" onClick={()=>SetDisplay('')}>Dashboard</li>
    <li className="button is-large" onClick={()=>SetDisplay('finance')}>Finance</li>
    <li className="button is-large" onClick={()=>SetDisplay('profile')}>Profile</li>
    <li className="button is-large" onClick={()=>SetDisplay('setUp')}>Set Up</li>
  </ul>
</div>
    )
}