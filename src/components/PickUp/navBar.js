import React from 'react'

export default function NavBar ({SetStatus}){
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">

  <a className="button navbar-item" href='/'>
                        Home
                    </a>
        
        <p className='button' onClick={()=>SetStatus('')}>PickUp</p>
  </div>
  <div className="navbar-menu">
    
  </div>
</nav>
    )
}