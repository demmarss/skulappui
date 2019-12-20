import React from 'react'


export default function SideNav({SetStatus}){

  const options = ['Parent', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Admin']
    return (
        <div className="tile is-ancestor">
  <div className="tile is-4 is-vertical is-parent">
    <div className="tile is-child box">
    <aside className="menu">
    <ul>
  {options.map(option =>
 
    <li key={option}>
      <p className='button' onClick={()=> SetStatus(option)} >   {option} </p>
      <br/>
      <br/>
    </li>
 
    )
  }</ul>

</aside>

    </div>
  </div>
  <div className="tile is-parent">
    <div className="tile is-child box">
    <section className="hero is-primary is-medium">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        PickUp Apps
      </h1>
      <h2 className="subtitle">
        We manage you children pick up
      </h2>
      <h2 className="subtitle">
        In future, we will incorporate machine learning
      </h2>
    </div>
  </div>
</section>
    </div>
  </div>
</div>
    )
}